import React, { useEffect, useState } from 'react'
import requests from '../requests'
import "./Jumbotron.css"
import favicon from "../images/favicon.ico"
import { MdPlayArrow, MdInfoOutline } from "react-icons/md"

function Jumbotron() {
  const [movie, setMovie] = useState([])
  const url = "https://api.themoviedb.org/3"
  useEffect(() => {
    fetch(url + requests.fetchNetflixOriginals)
      .then(res => res.json())
      .then(data => setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]))
  }, [])
  return (
    <div className='jumbotron'>
      <div
        className='banner'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundPosition: 'top center'
        }}
      >
        <div className='title-logo'>
          <span>
            <img src={favicon} alt=""/>
            <h4>Series</h4>
          </span>
          <h2>{movie.name}</h2>
          <p>{movie.overview}</p>
        </div>
        <button>
          <MdPlayArrow />
          <span>Play</span>
        </button>
        <button>
          <MdInfoOutline />
          <span>More Info</span>
        </button>
      
      </div>
    </div>
  )
}

export default Jumbotron