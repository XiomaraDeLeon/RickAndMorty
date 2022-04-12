import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from "react-bootstrap";
import { newContext } from '../context';
import '../styles/paginaPrincipal.css'
import { getCLS } from 'web-vitals';

function BotonPersonajes() {
  const [disable, setDisable] = useState(false)
  const [pages, setPages] = useState(1)
  const [botonAnterior, setBotonAnterior] = useState(false)

      const {
        personajes,
        setPersonajes
      } = React.useContext(newContext)

      useEffect(() => {
        if(personajes.info?.pages === pages){
          setDisable(true)
        }

        if(pages === 1){
          setBotonAnterior(true)
        }
      }, [pages]);

      async function BotonSiguiente(){
          
        if(personajes.info.next !== null){
          setDisable(true)
          setBotonAnterior(true)
          const response2 = await axios(personajes.info.next)
          
          setTimeout(() => {
            setPersonajes(response2.data)
            setDisable(false)
            setBotonAnterior(false)
            setPages(pages+1)
          },1000)
        }
      }

      async function BotonAnterior(){
        if(personajes.info.prev !== null){
          setBotonAnterior(true)
          setDisable(true)

          const response3 = await axios(personajes.info.prev)
          
          setTimeout(() => {
            setPersonajes(response3.data)
            setBotonAnterior(false)
            setDisable(false)
            setPages(pages-1)
          }, 1000)
          
        }

      }
   
  return (
    <React.Fragment>
      <div className="contenedorBotones">
          <Button disabled={botonAnterior} onClick={BotonAnterior} className="mt-3 testo" variant="primary">Anterior</Button>
          <h1 className="testo">Rick and Morty</h1>
          <Button disabled={disable} onClick={BotonSiguiente} className="mt-3 testo" variant="primary">Siguiente</Button>
      </div>
    </React.Fragment>
  );
}

export default BotonPersonajes;