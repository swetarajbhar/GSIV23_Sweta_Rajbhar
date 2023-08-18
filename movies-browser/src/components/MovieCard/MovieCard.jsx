import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MovieLogo from "../../assets/JPG/iguana.jpg";

import { CardActionArea } from '@mui/material';

import "./MovieCard.scss"


const MovieCard = () => {

  const openDetailsPage = () => {
    console.log('CARD CLICKED');
  }
  
  return (
    <div className='MovieCard'>
      <Card sx={{ maxWidth: 200, borderRadius: 2, boxShadow: '0px 4px 3px rgba(0, 0, 0, 0.3)' }}>
        <CardActionArea onClick={openDetailsPage}>
          <CardMedia
            sx={{ height: 220, objectFit: 'fill' }}
            component="img"
            image={MovieLogo}
            alt="green iguana"
          />
          <CardContent sx={{ textAlign: 'left', height: 65, padding: '7px 2px 2px 2px' }}>
            <div className='CardContent'>
              <div className='CardHeading'>
                <div className='Title'>Movie Title</div>
                <div className='Rating'>(Rating)</div>
              </div>
              <p className='Description'>The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>

  );
}


export default MovieCard