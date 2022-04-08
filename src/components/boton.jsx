import React from 'react';
import {Container, Button, Row, Col} from "react-bootstrap";
import useApi2 from './botonSiguiente';

function BotonPersonajes() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          {/* <Button className="mt-3" variant="primary">Anterior</Button> */}
          <Button onClick={useApi2} className="mt-3" variant="primary">Siguiente</Button>  
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default BotonPersonajes;