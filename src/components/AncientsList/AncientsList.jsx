import React from 'react';
import GodCard from './GodCard';
import './AncientsList.css';

const AncientsList = props => {
  const generateListItems = () => {
    if (props.gods) {
      return props.gods.map(god => <GodCard key={god.name} god={god} />);
    }
  };

  return (
    <div>
      <h2>Meet the Ancients</h2>
      <div className='ancientsList'>{generateListItems()}</div>
    </div>
  );
};

export default AncientsList;
