import React from 'react';
import { parse, distanceInWordsToNow } from 'date-fns';
import './GodCard.css';

const GodCard = ({ god }) => {
  const era = distanceInWordsToNow(parse(god.end_of_an_era), {
    addSuffix: true
  });

  const getPicture = () => {
    if (god.name.includes('ZEUS')) return '/images/zeus.svg';
    if (god.name.includes('ATHENA')) return '/images/athena.svg';
    if (god.name.includes('NEPTUNE')) return '/images/neptune.svg';
    return '/images/masks.svg';
  };

  return (
    <div className='godCard'>
      <img src={getPicture()} alt='god' height='85px' />
      <div className='godCard__text'>
        <div>
          Name: <strong>{god.name}</strong>
        </div>
        <div>Superpower: {god.superpower} </div>
        <div>End of an era: {era.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default GodCard;
