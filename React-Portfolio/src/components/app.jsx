
// import Header from './Navbar/Header';
// import Home from './Home';
// import ProjectGallery from './ProjectGallery';
// import Contact from './Contact';
// import Wrapper from './Wrapper';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Header'
import '../styles/App.css'
import Home from './Home/Home'
import ProjectGallery from './ProjectGallery/ProjectGallery';

function App (){

  const projects = [
    { id: 1, title: 'Project 1', image: '.' },
    { id: 2, title: 'Project 2', image: '' },
    { id: 3, title: 'Project 3', image: '' },
    { id: 4, title: 'Project 4', image: '' },
    { id: 5, title: 'Project 5', image: '' },
    { id: 6, title: 'Project 6', image: '' },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-gallery" element={<ProjectGallery />} />
        </Routes>
      </div>
    </Router>
      );
};

export default App;