import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import { movieList } from "../../api/listing";
import "./MovieList.scss"

const MovieList = ()=>{
    const [movieData,setMovieData] = useState([]);
    useEffect(()=>{
        movieList().then((res)=>{
            console.log('RES :', res);
            setMovieData(res.data);     
        }).catch((err)=>{
            console.log('Err:', err);
            setMovieData([]);
        });
    },[])
    return(
       <>
       <TopNavBar/>
       <div className="MovieWrapper">   {movieData.map((movie)=>(
            <MovieCard data={movie}/> 
       ))}</div>
    
      
       </>
    )
}

export default MovieList;