import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Routes from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as bootstrap from 'bootstrap';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);