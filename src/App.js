import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectCard from './components/ShowCard';
import Home from './pages/Home';
import MCUPhases from './pages/MCUPhases';
import Upcoming from './pages/Upcoming';
import DisneyParks from './pages/DisneyParks';

const App = () => {

  return (
    <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <Home />
            </Route>
            <Route exapct path='/Home'>
              <Navbar />
              <Home />
            </Route>
            <Route exact path='/MCUPhases'>
              <Navbar />
              <MCUPhases />
            </Route>
            <Route exact path='/Upcoming'>
              <Navbar />
              <Upcoming />
            </Route>
            <Route exact path='/DisneyParks'>
              <Navbar />
              <DisneyParks />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
