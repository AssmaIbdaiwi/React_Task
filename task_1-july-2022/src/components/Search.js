import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Search (){

    const [query,setSearch]= useState("");
    const [results,setResults]=useState([]);
    const onChange =e =>{
       e.preventDefault();  
   fetch (`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
   ).then(res=>res.json()) 
   .then(data=>{
   
   if(!data.errors){
   setResults(data.results)
   }else{
       setResults([]) ;
   }
      
   })
   setSearch(e.target.value);
    }

    return(
        <>
        <h1>Movies</h1>
        <Link  to="/Add"> <input type="button" value="Add" class="btn btn-success" /></Link>
        <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={onChange}/>

  </form>
       


  {results.length>0 && (
    results.map(movie=>(
        <div className="row">
       <div  key={movie.id} className="card col-sm-12 " style={{ width: '18rem', margin: "20px" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt= {`${movie.title}`}></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview.substring(0,100)}</p>
                    <a href={movie.id} className="btn btn-primary"> see more</a>
                </div>
            </div>
        </div>
    
  

   

 )))}
 






        </>


    )
}

export default Search;

