import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import Routes from './Routes';

export default function App() {
  return (
    <div className='background'>
      <BrowserRouter>
      <GlobalStyles />
        <Header />
        <div className="content">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}