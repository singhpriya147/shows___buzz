import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import   '../styles/ShowCastDetails.css'
import { Card } from '@mui/material';
const ShowCastDetails = () => {
  const { showId } = useParams();
  console.log("from param");
  console.log(showId);
  const [showCast, setShowCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}/cast`)
      .then((response) => response.json())
      .then((data) => {
        setShowCast(data);
      })
      .catch((error) => {
        console.error('Error fetching cast details', error);
      });
  }, [showId]);

  return (
    <div className='container'>
      <h1>Casts of your favorite Shows</h1>
      <div className='detail-container'>
        {showCast &&
          showCast.map((character) => (
            <Card style={{padding:'2rem',textAlign:'center'}}>
              <div key={character.person.id} >
                {/* Using a unique identifier as the key */}
                <h2>{character.character.name}</h2>
                {character.character.image && ( // Check if character image exists
                  <img
                    src={character.character.image.medium}
                    alt={character.character.name}
                  />
                )}
                <p>Name: {character.person.name}</p>
                {character.person.birthday && ( // Check if birthday exists
                  <p>Birthday: {character.person.birthday}</p>
                )}
                {character.person.gender && ( // Check if gender exists
                  <p>Gender: {character.person.gender}</p>
                )}
                {/* You can add conditional rendering for other character details */}
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ShowCastDetails;
