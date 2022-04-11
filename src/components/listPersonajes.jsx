import React from 'react';
import CardsPersonajes from './cards';
import useApi from '../hooks/useApi';
import { newContext } from '../context';
import '../styles/paginaPrincipal.css'

const API = 'https://rickandmortyapi.com/api/character/';

const PersonajesList = () => {
	useApi(API)

	const {
        personajes
      } = React.useContext(newContext)

	return (
			<div className="Cards">		
				{personajes.results?.map(personaje => (
					<CardsPersonajes 
						personaje={personaje}
						key={personaje.id}
					/>
				))}
			</div>
	);
}

export default PersonajesList;