import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

const App = () => {

  return (
    <div>
      <Navbar />
      <ProjectCard title="The Falcon and the Winter Soldier" />
    </div>
    // <div>Hello World</div>
  );
};

export default App;
