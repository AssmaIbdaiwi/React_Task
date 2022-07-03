import React, { useState, useEffect } from "react";
import Search from "./Search";
function Home() {
    const [movie, SetMovie] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page`
        )
            .then((res) => res.json())
            .then((data) => {
                SetMovie(data.results);
                console.log(data.results);
            });
    }, []);

    return(
    
      <>
    
    <div className="row">
        {movie.map((movie) =>
            <div  key={movie.id} className="card col-sm-12 " style={{ width: '18rem', margin: "20px" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt= {`${movie.title}`}></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview.substring(0,100)}</p>
                    <a href={movie.id} className="btn btn-primary"> see more</a>
                </div>
            </div>
        )}
      
    </div></>
    )
}

export default Home;