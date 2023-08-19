import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { get } from "lodash";
import { DETAILS } from '../../globals/utils/routes';

import "./MovieCard.scss"

const linesToShow = 3; // Define the maximum number of lines to show

const MovieCard = ({ data }) => {

  const navigate = useNavigate();

  const openDetailsPage = (movieId) => {
    navigate(`${DETAILS}/${movieId}`)
  }

  return (
      <Card sx={{ borderRadius: 2, boxShadow: '0px 4px 3px rgba(0, 0, 0, 0.3)' }}>
        <CardActionArea onClick={() => openDetailsPage(get(data, 'id'))}>
          {get(data, 'picture') ? (
            <CardMedia
              sx={{ height: 220, objectFit: 'fill' }}
              component="img"
              image={get(data, 'picture')}
              alt={get(data, 'title')}
            />
          ) : (
            <div className='MoviePoster'></div>
          )}
          <CardContent sx={{ textAlign: 'left', height: 65, padding: '0.5em' }}>
            <div className='CardContent'>
              <div className='CardHeading'>
                <div className='Title'>{get(data, 'title')}</div>
                <div className='Rating'>({get(data, 'vote_average')})</div>
              </div>
              <p className='Description'>{get(data, 'overview')}</p>
              {/* Display the remaining lines */}
              {get(data, 'overview').split('\n').length > linesToShow && (
                <p className='RemainingLines'>
                  {get(data, 'overview').split('\n').length - linesToShow} lines left
                </p>
              )}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}


export default MovieCard