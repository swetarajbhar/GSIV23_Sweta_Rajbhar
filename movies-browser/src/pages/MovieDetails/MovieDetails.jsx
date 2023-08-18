import React,{ useEffect, useState } from "react";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import { movieDetails } from "../../api/details";
import { useLocation } from 'react-router';

let movieId = '';
const MovieDetails = ()=>{
    movieId = useLocation().pathname.split('/')[2] || '';
    const [movieDetail,setMovieDetail] = useState({});
    useEffect(()=>{
        movieDetails(movieId).then((res)=>{
            setMovieDetail(res.data);     
        }).catch((err)=>{
            setMovieDetail({});
        });
    },[])
    return(
        <>
        <TopNavBar/>
        <MovieDetailsCard data={movieDetail}/>
        </>
    )
}

export default MovieDetails;