import React, { useEffect, useState } from 'react'
import requests from '../requests'
import "./Jumbotron.css"

function Jumbotron() {
  const [movie, setMovie] = useState([])
  const url = "https://api.themoviedb.org/3"
  useEffect(() => {
    fetch(url + requests.fetchNetflixOriginals)
      .then(res => res.json())
      .then(data => setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]))
  }, [])
  console.log(movie)
  return (
    <div className='jumbotron'>
      <header
        className='header'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundPosition: 'center center'
        }}
      >
      </header>
    </div>
  )
}

export default Jumbotron