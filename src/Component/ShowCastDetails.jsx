import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <div>
        {showCast.map((character) => (
          <div key={character.person.id}>
            {' '}
            {/* Using a unique identifier as the key */}
            <h2>{character.character.name}</h2>
            <img
              src={character.character.image.medium}
              alt={character.character.name}
            />
            <p>Name: {character.person.name}</p>
            <p>Birthday: {character.person.birthday}</p>
            <p>Gender: {character.person.gender}</p>
            {/* You can display other character details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCastDetails;
