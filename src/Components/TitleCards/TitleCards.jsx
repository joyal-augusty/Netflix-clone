import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({ title, category }) => {
  
  const [apiData,setApiData] = useState([])
  const cardsRef = useRef();
  
  //movie api fetch
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDA5ZDg5YWUwNGQ5MjJkYmQyMTE2ODc2ZjZmNTlhMyIsIm5iZiI6MTc2ODM5NDkwOC42NTIsInN1YiI6IjY5Njc5MDljODAwYmJkY2E3ZTg2NjM5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJX17BPDEMTEwr4EpVkQydfqhAlNjyfJD5lxJTAmQN8'
  }
};


  
const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

  useEffect(() => {
    //movie api fetch
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  
  cardsRef.current.addEventListener('wheel',handleWheel)
},[])

  return (
    <div className='title-cards'>
      <h2>{title ? title:"Popular on Netflix"}</h2>

      <div className="cards-list" ref={cardsRef}>
        {apiData.map((card,index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
