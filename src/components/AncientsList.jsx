import React from 'react';
import GodItem from './GodItem';

const AncientsList = props => {
  const generateListItems = () => {
    if (props.gods) {
      return props.gods.map(god => <GodItem key={god.name} god={god} />);
    }
  };

  return (
    <div>
      <h2>The List of Ancients</h2>
      <div>{generateListItems()}</div>
    </div>
  );
};

export default AncientsList;
