import React from 'react';
import Animal from '../Animal'

//přes onclick zavolam funkci, a přes to změnim id


const AnimalList = ({animals}) => {
    return (
      
      <div class="animal-list">

        {animals.map(zvire => (
                    <Animal
                    key={zvire.id}
                    nazev={zvire.nazev}
                    nazevLatinsky={zvire.nazevLatinsky}
                    domovina={zvire.domovina}
                    biotop={zvire.biotop}
                    potrava={zvire.potrava}
                    velikost={zvire.velikost}
                    popis={zvire.popis}
                    foto={zvire.foto}
                    />
                  ))};

      </div>
    );
  }


export default AnimalList;