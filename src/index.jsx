import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import './style.css';

import Animal from './components/Animal'
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animal, setAnimal] = useState({});

  useEffect(() => {
			fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
			.then(response => response.json())
			.then(data => setAnimal(data))
		},[]);


  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">


      <ul>
                {animal.map(zvirata => (
                    <div
                    key={zvirata.id}
                    nazev={zvirata.nazev}
                    nazevLatinsky={zvirata.nazevLatinsky}
                    domovina={zvirata.domovina}
                    biotop={zvirata.biotop}
                    potrava={zvirata.potrava}
                    velikost={zvirata.velikost}
                    popis={zvirata.popis}
                    foto={zvirata.foto}
                    />
                  ))};
      </ul>




        <AnimalList>
          <Animal />
        </AnimalList>
        

        <AnimalDetail />

      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
