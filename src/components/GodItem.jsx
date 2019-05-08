import React from 'react';
import { parse, distanceInWordsToNow } from 'date-fns';

const GodItem = ({ god }) => {
  const era = distanceInWordsToNow(parse(god.end_of_an_era), {
    addSuffix: true
  });
  return (
    <div>
      Name: {god.name} superpower: {god.superpower} end of an era:{' '}
      {era.toUpperCase()}
    </div>
  );
};

export default GodItem;
