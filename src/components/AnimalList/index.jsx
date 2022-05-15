import React from 'react';


const AnimalList = () => {
    return (
      <>
      {
      zvirata.map(Animal => <Animal
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
      )}


      </>
    );
  }


export default AnimalList;