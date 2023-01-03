import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RussBuses } from "./components/RussBuses";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RussBuses />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
