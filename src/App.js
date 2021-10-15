import React, { useState } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NextSaga from './pages/NextSaga'
import InfinitySaga from './pages/InfinitySaga'
import DisneyParks from './pages/DisneyParks'
import FAQ from './pages/FAQ'

const App = () => {

  return (
    <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Home'>
              <Home />
            </Route>
            <Route exact path='/NextSaga'>
              <NextSaga />
            </Route>
            <Route exact path='/InfinitySaga'>
              <InfinitySaga />
            </Route>
            <Route exact path='/DisneyParks'>
              <DisneyParks />
            </Route>
            <Route exact path='/FAQ'>
              <FAQ />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  )
}

export default App
