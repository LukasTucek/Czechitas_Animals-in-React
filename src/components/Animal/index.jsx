import React from 'react';
import './style.css';



const Animal = ({nazev, nazevLatinsky, foto}) => {
    return (
      
		<div class="animal">
		<div class="animal__image">
			<img src={foto} alt="slon" />
		</div>
		<div class="animal__desc">
			<div class="animal__name">{nazev}</div>
			<div class="animal__latin">{nazevLatinsky}</div>
		</div>
	</div>

      
    );
  }

  export default Animal;