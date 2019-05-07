import React from 'react';
import { parse, distanceInWordsStrict } from 'date-fns';

const GodItem = ({ god }) => {
  const era =
    distanceInWordsStrict(Date.now(), parse(god.end_of_an_era)) + ' ago';
  return (
    <li>
      Name: {god.name.toUpperCase()} superpower: {god.superpower.toUpperCase()}
      end of an era: {era.toUpperCase()}
    </li>
  );
};

export default GodItem;
