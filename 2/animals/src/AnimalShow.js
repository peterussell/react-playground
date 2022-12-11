import { useState } from 'react';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

import './AnimalShow.css';

const svgMap = { bird, cat, cow, dog, gator, horse };

export const AnimalShow = ({ type }) => {
  const [likes, setLikes] = useState(0);

  const handleAnimalClick = () => { setLikes(likes + 1); }

  return (
    <div className="animal-show" onClick={handleAnimalClick}>
      <img src={svgMap[type]} alt={type} className="animal" />
      <img
        src={heart}
        alt="Heart"
        style={{ width: 10 + 10 * likes + 'px' }}
        className="heart"
      />
    </div>
  );
};
