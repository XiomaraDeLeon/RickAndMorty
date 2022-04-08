import React from 'react';
import CardsPersonajes from './cards';
import useApi from '../hooks/useApi';

const PersonajesList = () => {
	const characteres = useApi()
	return (
		<section className="main-container">
			<div className="ProductList">
				{characteres.results?.map(personaje => (
					<CardsPersonajes 
						personaje={personaje}
						key={personaje.id}
					/>
				))}
			</div>
		</section>
	);
}

export default PersonajesList;