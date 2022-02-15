import React from 'react';
import { Card, Row, Text, Button } from "@nextui-org/react";
import Avocado from '../../Assets/Images/fruit-5.jpeg';

function CardComponent() {
  return (
    <Card clickable bordered>
      <Card.Header>
        <Card.Image
          src={Avocado}
          width="100%"
          height={140}
          objectFit='cover'
        />
      </Card.Header>
      <Card.Body>
        <Row justify='center'>
          <Text b>Item name would be here!</Text>
        </Row>
        <Row justify='center'>
          <Text css={{ color: "$accents4", fontWeight: "$semibold" }}> $15.99 </Text>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row justify='center'>
          <Button rounded color="error">Comprar</Button>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export { CardComponent };