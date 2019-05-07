import React from 'react';
import { parse, distanceInWordsToNow } from 'date-fns';

const GodItem = ({ god }) => {
  const era = distanceInWordsToNow(parse(god.end_of_an_era), {
    addSuffix: true
  });
  return (
    <li>
      Name: {god.name.toUpperCase()} superpower: {god.superpower.toUpperCase()}{' '}
      end of an era: {era.toUpperCase()}
    </li>
  );
};

export default GodItem;
