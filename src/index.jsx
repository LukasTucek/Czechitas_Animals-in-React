import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import './style.css';

import Animal from './components/Animal'
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animal, setAnimal] = useState(null);

  useEffect(() => {
			fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
			.then(response => response.json())
			.then(data => setAnimal(data))
		},[]);


  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">

        <AnimalList>
          <Animal />
        </AnimalList>
        

        <AnimalDetail />

      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
