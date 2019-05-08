import React from 'react';
import Ancients from './components/Ancients';
import OracleError from './components/OracleError';

const App = () => {
  return (
    <div>
      <h1>Gods of Ancient Times</h1>
      <Ancients />
      <OracleError />
    </div>
  );
};

export default App;
