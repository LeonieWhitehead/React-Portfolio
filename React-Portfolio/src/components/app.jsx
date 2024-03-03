// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Navbar/Header';
// import Home from './Home';
// import ProjectGallery from './ProjectGallery';
// import Contact from './Contact';
// import Wrapper from './Wrapper';

import Navbar from './Navbar/Header'
import '../styles/App.css'
import Home from './Home/Home'


function App (){
  return (
    // <Router>
      <div className="App">
        <Navbar />
        <Home />
        </div>
  );
};

export default App;