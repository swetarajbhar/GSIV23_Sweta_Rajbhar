import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import MovieLogo from "../../assets/JPG/iguana.jpg";

import { CardActionArea } from '@mui/material';

import "./MovieCard.scss"


const MovieCard = () => {
  return (
    <div className='MovieCard'>
      <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: '0px 8px 6px -6px rgba(0, 0, 0, 0.3)' }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 200 }}
            component="img"
            height="800"
            image={MovieLogo}
            alt="green iguana"
          />
         <CardContent sx={{ textAlign: 'left'}}>
          <Typography gutterBottom variant="h5" component="div">
            Movie Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description... (2 Lines)
          </Typography>
        </CardContent>  
        </CardActionArea>
      </Card>
    </div>

  );
}


export default MovieCard