import React from 'react';
import {Card} from "react-bootstrap";
import '../styles/paginaPrincipal.css'

function CardsPersonajes({personaje}){
    
    return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={personaje.image}/>
                <Card.Body>
                    <Card.Title className="testo">{personaje.name}</Card.Title>
                    <Card.Text className="testo">
                        Status: {personaje.status}, 
                        Gender: {personaje.gender}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}

export default CardsPersonajes;