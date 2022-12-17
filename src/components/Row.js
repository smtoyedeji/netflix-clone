import React, { useState, useEffect, useRef } from 'react'
import "./Row.css"
import { MdChevronLeft, MdChevronRight, MdPlayCircle, MdOutlineArrowDropDownCircle } from "react-icons/md"
import { FiPlusCircle } from "react-icons/fi"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([])
  const url = "https://api.themoviedb.org/3"

  const sliderRef = useRef(null)

  const scrollLeft = () => {
    let slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const scrollRight = () => {
    let slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    fetch(url + props.fetchUrl)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [props.fetchUrl])

  console.log(movies)
  let showMovies = movies.map(movie => (
    <div className='image'>
      <img src={`${base_url}${movie.poster_path}`} alt={movie.title} className="cards" />
      <div className='card--controls'>
        <div>
          <MdPlayCircle className='card-icons'/>
          <FiPlusCircle className='card-icons'/>
        </div>
        <div>
          <MdOutlineArrowDropDownCircle className='card-icons'/>
        </div>
      </div>
    </div>

  ))

  return (
    <div className='rows'>
      <h2>{props.title}</h2>
      <div className='row--cards' ref={sliderRef}>
        <button className='left' onClick={scrollLeft}>
          <MdChevronLeft className='scroll--btns'/>
        </button>
        {showMovies}
        <button className='right' onClick={scrollRight}>
          <MdChevronRight className='scroll--btns'/>
        </button>  
              
      </div>
      
    </div>
  )
}

export default Row