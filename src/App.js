
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import ShowCastDetails from './Component/ShowCastDetails'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/shows/:showId/cast' element={<ShowCastDetails/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
