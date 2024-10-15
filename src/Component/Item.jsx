import React, { useState } from 'react';
import { Box, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/app.css';
import Button from '@mui/material/Button';

import  defaultImage  from '../assets/images/no_image.jpg'



function Item({ show }) {
  const [summary, setSummary] = useState(false);
 
    const medium = show.image ? show.image.medium : defaultImage;
    console.log(show.name);
console.log(show.id);

  return (
    <Card sx={{ margin: 5, padding: 5, maxWidth: 300  }}>
      <Link to={`/shows/${show.id}/cast`} target='_blank'>
        <div className='card-header'>
          <h1> {show.name}</h1>
          <p>
            <b>Type:</b> {show.type ? show.type : 'null'}
          </p>
          <p>
            <b>Language:</b> {show.language ? show.language : 'null'}
          </p>
          <p>
            <b>Status:</b> {show.status ? show.status : 'null'}
          </p>
          <p>
            <b>Runtime:</b> {show.runtime ? `${show.runtime} min` : 'null'}
          </p>
          <p>
            <b>Genres:</b> {show.genres ? show.genres.join(', ') : 'null'}
          </p>
          <p>
            <b>Rating:</b>{' '}
            {show.rating && show.rating.average ? show.rating.average : 'null'}
          </p>
        </div>
      </Link>

      <div>
        <Button
          variant='contained'
          sx={{ backgroundColor: '#561B77', mb: 2, mt: 2 }}
          onClick={() => setSummary(!summary)}
        >
          {summary ? ' hide summary ' : 'show summary'}
        </Button>
        <Box
          sx={{
            boxShadow: 1,
           
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'auto',
           gap:'3rem'
          }}
        >
          {summary && show.summary
            ? show.summary.replace(/(<([^>]+)>)/gi, '')
            : null}
        </Box>
      </div>
      <Link to={`/shows/${show.id}/cast`} target='_blank'>
        <img src={medium} className='image' alt='' />
      </Link>
    </Card>
  );
}

export default Item;
