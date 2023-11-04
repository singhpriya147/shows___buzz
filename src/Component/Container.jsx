import React from 'react';
import Item from './Item';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
function Container({ container }) {
  return (
    <div>
      {container.map((item) => (
       
          <Card
            sx={{
              backgroundColor: '#DCDCFF',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {container.map((item) => {
              return <Item key={item.id} {...item} />;
            })}
          </Card>
  
      ))}
    </div>
  );
}

export default Container;

