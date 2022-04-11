import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Button, Row, Col} from "react-bootstrap";
import { newContext } from '../context';

function BotonPersonajes() {
  const [disable, setDisable] = useState(false)
  const [pages, setPages] = useState(1)
  const [botonAnterior, setBotonAnterior] = useState(false)

      const {
        personajes,
        setPersonajes
      } = React.useContext(newContext)

      useEffect(() => {
        console.log(personajes.info)
        if(personajes.info?.pages == pages){
          setDisable(true)
        }

        if(pages == 1){
          setBotonAnterior(true)
        }

        console.log(pages)
      }, [pages]);

      async function BotonSiguiente(){
        setDisable(true)
        setBotonAnterior(true)

        if(personajes.info.next != null){
          const response2 = await axios(personajes.info.next)
          setPersonajes(response2.data)
          setPages(pages+1)
        }

          setTimeout(() => {
            setDisable(false)
            setBotonAnterior(false)
          },1000)
        
      }

      async function BotonAnterior(){
        console.log(pages)

        if(personajes.info.prev != null){
          setDisable(true)  

          const response3 = await axios(personajes.info.prev)
          setPersonajes(response3.data)
          setPages(pages-1)

          setTimeout(() => {
            setDisable(false)
          }, 1000)
          
        }

        else{
          console.log("hola")
        }
      }
   
  return (
    <Container>
      <Row>
        <Col>
          <Button disabled={botonAnterior} onClick={BotonAnterior} className="mt-3" variant="primary">Anterior</Button>
        </Col>
        <Col>
          {/* <Button className="mt-3" variant="primary">Anterior</Button> */}
          <h1>Rick and Morty</h1>
        </Col>
        <Col>
          <Button disabled={disable} onClick={BotonSiguiente} className="mt-3" variant="primary">Siguiente</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BotonPersonajes;