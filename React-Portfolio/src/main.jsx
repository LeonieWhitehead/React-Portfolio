import React from 'react';
import { createRoot } from 'react-dom';
import Routes from './components/app';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);