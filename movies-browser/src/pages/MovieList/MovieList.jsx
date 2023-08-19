import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import TopNavBar from "../../components/TopNavBar/TopNavBar";

import { incrementPage } from "../../features/topNavBar/searchSlice";
import { useSelector, useDispatch } from "react-redux";

import "./MovieList.scss"

const MovieList = () => {
    const { movieData, isLoading, page, totalPages } = useSelector((state) => state.search)
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            if (
                (window.innerHeight + document.documentElement.scrollTop !==
                    document.documentElement.offsetHeight) ||
                isLoading
            ) {
                return;
            }
            if(page<=totalPages){
                dispatch(incrementPage());
            } 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dispatch, isLoading]);

    return (
        <>
            <TopNavBar isListingPageOpen={true} isDetailsPageOpen={false} />
            <div className="MovieWrapper">   {movieData.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
            ))}
            </div>
            {isLoading && (
                <div className="text-center">
                    <div class="spinner-border text-primary " role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieList;