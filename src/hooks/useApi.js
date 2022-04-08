import { useEffect, useState } from "react";
import axios from "axios";

const API = 'https://rickandmortyapi.com/api/character';

const useApi = () => {
    const [personajes, setPersonajes] = useState([]);
	useEffect(() => {
		async function MyApi(){
			const response = await axios(API)
			setPersonajes(response.data)
		}
		MyApi()
	}, []);

	useEffect(() => {
		async function MyApi2(){
			const response2 = await axios(personajes.info.next)
			setPersonajes(response2.data)
		}
		MyApi2()
		MyApi2()
		MyApi2()
		MyApi2()
	}, []);
	return personajes
}

export default useApi