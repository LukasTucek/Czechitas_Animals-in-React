import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animals, setAnimals] = useState([]);
  const [animalDetail, setAnimalDetail] = useState({});



  //parametr bude Id
  //dle ID si najde v seznamu animals zvíře

  const changeCurrentAnimal = (id) => {
    const selectedAnimal = animals.find((animal) => {

      return id === animal.id
    });

    setAnimalDetail(selectedAnimal)
  }



  useEffect(() => {
			fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
			.then(response => response.json())
			.then(data => {
        setAnimals(data.zvirata)
        setAnimalDetail(data.zvirata[0]) //defaultní nastavení - zobrazí se první zvíře
      })
		},[]);


  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">

        <AnimalList animals={animals} onAnimalClick={changeCurrentAnimal}/>
    
        <AnimalDetail animal={animalDetail} />

      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
