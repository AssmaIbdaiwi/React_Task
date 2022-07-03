import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


function View() {

    const {movie_id} =  useParams();
    const [movie, setMovie] = useState([]);
    
    useEffect(()=>{
        async function getMovie(){
        const res = await  fetch(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=a333681703b0155402c1457a01741c8f&language=en-US` )
            const data = await res.json()
            setMovie(data) }
            getMovie()
         
    }, [movie_id]);
    



  return (
    <div className="row">
        
            <div   className="card col-sm-12 " style={{ width: '18rem', margin: "25px" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt= {`${movie.title}`}></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                   
                </div>
            </div>
        
      
    </div>
  
)}

export default View;