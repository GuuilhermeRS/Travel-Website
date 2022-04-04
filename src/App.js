import React from 'react';
import Destination from './components/Destination';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  return (
    <div className='background'>
      <Header />
      <div className="content">
        {/* <Home /> */}
        <Destination />
      </div>
    </div>
  );
}