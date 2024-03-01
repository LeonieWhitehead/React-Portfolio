import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ProjectGallery from './ProjectGallery';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={ProjectGallery} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;