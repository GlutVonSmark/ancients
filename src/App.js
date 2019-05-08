import React from 'react';
import Ancients from './components/Ancients';
import OracleError from './components/OracleError/OracleError';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='centered'>Gods of Ancient Times</h1>
      <Ancients />
      <OracleError />
    </div>
  );
};

export default App;
