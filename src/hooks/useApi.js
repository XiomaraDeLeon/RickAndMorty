import React, { useEffect } from "react";
import axios from "axios";
import { newContext } from "../context";

const useApi = (API) => {
	const {
        personajes,
        setPersonajes
    } = React.useContext(newContext)


	useEffect(() => {
		async function MyApi(){
			const response = await axios(API)
			setPersonajes(response.data)
		}
		MyApi()
	}, []);
	return personajes
}

export default useApi