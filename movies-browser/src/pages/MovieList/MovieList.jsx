import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import { movieList } from "../../api/listing";
import "./MovieList.scss"

const MovieList = ()=>{
    const [movieData,setMovieData] = useState([]);

    const setSearchData = (_data)=>{
        console.log('_DATA :', _data);
        setMovieData(_data);     
    }

    useEffect(()=>{
        movieList({}).then((res)=>{
            setMovieData(res.data);     
        }).catch((err)=>{
            setMovieData([]);
        });
    },[])
    return(
       <>
       <TopNavBar isListingPageOpen={true} isDetailsPageOpen={false} setMovieDataOnChange={setSearchData}/>
       <div className="MovieWrapper">   {movieData.map((movie)=>(
            <MovieCard key={movie.id} data={movie}/> 
       ))}</div>
    
      
       </>
    )
}

export default MovieList;