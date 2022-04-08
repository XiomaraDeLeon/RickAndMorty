import React from 'react';
import {Card} from "react-bootstrap";       

function CardsPersonajes({personaje}){
    
    return(
        <Card className='mb-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={personaje.image}/>
            <Card.Body>
                <Card.Title>{personaje.name}</Card.Title>
                <Card.Text>
                    Status: {personaje.status}, 
                    Gender: {personaje.gender}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardsPersonajes;