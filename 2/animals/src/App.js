import { useState } from 'react'

import { AnimalShow } from './AnimalShow';

import './App.css';

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
};

export const App = () => {
  let [animals, setAnimals] = useState([]);

  const handleAddAnimalClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  })

  return (
    <div className="app">
      <button onClick={handleAddAnimalClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
};
