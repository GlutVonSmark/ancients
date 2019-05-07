import React from 'react';

const GodItem = ({ god }) => {
  return (
    <li>
      Name: {god.name.toUpperCase()} superpower: {god.superpower.toUpperCase()}
    </li>
  );
};

export default GodItem;
