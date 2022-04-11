import React from 'react';
import {Card, Container} from "react-bootstrap";
import '../styles/paginaPrincipal.css'

function CardsPersonajes({personaje}){
    
    return(
        <Container className='Cards'>
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
        </Container>
    )
}

export default CardsPersonajes;