import * as React from 'react';
import MovieLogo from "../../assets/JPG/iguana.jpg";

import { CardActionArea } from '@mui/material';

import "./MovieDetailsCard.scss"


const MovieDetailsCard = () => {

  return (

    <div className='MovieDetailsCard'>

      <div class="container">
        <div class="box1 red">
          <img src="https://i.imgur.com/aHu0Tzg.jpeg" width="100%"></img>
        </div>
        <div class="box2 green">
          <div className='MovieTitle'>
            Movie Title
            <span> (Rating)</span>
          </div>
          <div className='MovieDetails'>
          <p>Year | Length | Director</p>
          <p>Cast: Actor1, Actor2,..</p>
          </div>
          
         <p style={{    marginTop: "0.5em"}}> long details description...asdj aksdkajshkdjasdhakjshdasjh dajsd asdasj
          dlasjd asdka slkdaslk</p>
        </div>
      </div>
    </div>

  );
}


export default MovieDetailsCard;