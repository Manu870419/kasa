import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';




const root_container = document.getElementById("root");
const root = createRoot(root_container);
root.render(
  <Router>
    <App />
  </Router>
);

