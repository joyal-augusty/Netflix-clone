import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import js from '@eslint/js'
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()

  const [aipData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof:""
  })
  //api call from TMDB 
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDA5ZDg5YWUwNGQ5MjJkYmQyMTE2ODc2ZjZmNTlhMyIsIm5iZiI6MTc2ODM5NDkwOC42NTIsInN1YiI6IjY5Njc5MDljODAwYmJkY2E3ZTg2NjM5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJX17BPDEMTEwr4EpVkQydfqhAlNjyfJD5lxJTAmQN8'
  }
  };
  
  useEffect(() => {
    //TMDB Fetch
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${aipData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>

      <div className="player-info">
        <p>{aipData.published_at.slice(0,10)}</p>
        <p>{aipData.name}</p>
        <p>{aipData.type}</p>
      </div>
    </div>
  )
}

export default Player
