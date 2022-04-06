import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Destination from './components/Destination';
import Header from './components/Header';
import Nav from './components/Header/Nav'
import Routes from './Routes';

export default function App() {
  return (
    <div className='background'>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}