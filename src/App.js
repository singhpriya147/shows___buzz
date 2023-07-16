import React, { useEffect, useState } from 'react';
import Container from './main/Container';
import TextField from '@mui/material/TextField';
import './assets/app.css';
import  logo from './assets/images/logo.png'
// import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  const [endPoint, setendPoint] = useState('');
  const [container, setContainer] = useState([]);

  useEffect(() => {

    fetchMe();
  }, [endPoint]);

  const submitHandler = (e) => {
    e.preventDefault();
    
  };

  

const fetchMe = () => {

  
  fetch(`http://api.tvmaze.com/search/shows?q=${endPoint}`)
    .then((response) => response.json())
    .then((data) => setContainer(data));
};











  return (
    <div className='main'>
      <div className='bg-img'>
        <div className='header'>
          <div className='logo-container'>
            <img src={logo} alt='logo' className='logo' />
          </div>

          <form onSubmit={submitHandler} className='form'>
            <div className='input-container'>
              <input
                type='text'
                placeholder='search your favorite shows...'
                value={endPoint}
                onChange={(e) => setendPoint(e.target.value)}
              />
              <button className='button'>Search</button>
            </div>
          </form>

          <div className='icons'>
            <IconButton
              component='a'
              href='https://github.com/singhpriya147'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <GitHubIcon sx={{ color: 'white' }} />
            </IconButton>

            <IconButton
              component='a'
              href='https://www.linkedin.com/in/priya-singh-7994981aa/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='linkedIn'
            >
              <LinkedInIcon sx={{ color: 'white' }} />
            </IconButton>
          </div>
        </div>

        {container.length === 0 && (
          <div className='title'>
            <div className='dynamic-texts'>
              <p>Lights &nbsp; Camera &nbsp; Informations</p>
            </div>
          </div>
        )}

      
        
        <div className='tag-line'>
          <p>Unveiling TV Show Wonders at Your Fingertips!</p>
        </div>
      </div>

      <div>
        <Container container={container} />
      </div>
    </div>
  );
}

export default App;
