import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { HashRouter } from "react-router-dom";

import React, { useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <HashRouter>
   <App />
 </HashRouter>  

);
function App() {
  useEffect(() => {
    document.title = "Pixelaks Games";
  }, []);

  return (
    <div>
      <h1>Pixelaks Games!</h1>
    </div>
  );
}

