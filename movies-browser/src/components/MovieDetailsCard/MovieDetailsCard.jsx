import * as React from 'react';
import "./MovieDetailsCard.scss"

const MovieDetailsCard = ({data}) => {

  return (
    <div className='MovieDetailsCard'>
      {console.log('MOVIE DATA :', data)}
      <div className="container">
        <div className="MovieImage">
          <img src="https://i.imgur.com/aHu0Tzg.jpeg" width="100%"></img>
        </div>
        <div className="MovieInfo">
          <div className='MovieTitle'>
            Movie Title
            <span> (Rating)</span>
          </div>
          <div className='MovieDetails'>
          <p>Year | Length | Director</p>
          <p>Cast: Actor1, Actor2,..</p>
          </div>
          
         <p style={{marginTop: "0.5em"}}> long details description...asdj aksdkajshkdjasdhakjshdasjh dajsd asdasj
          dlasjd asdka slkdaslk</p>
        </div>
      </div>
    </div>

  );
}


export default MovieDetailsCard;