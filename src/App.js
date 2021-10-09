import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NextSaga from './pages/NextSaga';
import InfinitySaga from './pages/InfinitySaga';
import DisneyParks from './pages/DisneyParks';
import FAQ from './pages/FAQ';

const App = () => {

  return (
    <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <Home />
            </Route>
            <Route exact path='/Home'>
              <Navbar />
              <Home />
            </Route>
            <Route exact path='/NextSaga'>
              <Navbar />
              <NextSaga />
            </Route>
            <Route exact path='/InfinitySaga'>
              <Navbar />
              <InfinitySaga />
            </Route>
            <Route exact path='/DisneyParks'>
              <Navbar />
              <DisneyParks />
            </Route>
            <Route exact path='/FAQ'>
              <Navbar />
              <FAQ />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
};

export default App;
