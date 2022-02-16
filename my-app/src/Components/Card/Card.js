import React from 'react';
import { Card, Row, Text, Button } from "@nextui-org/react";
import Avocado from '../../Assets/Images/fruit-5.jpeg';

function CardComponent(props) {
  const { attributes } = props;
  console.log(attributes)
  return (
    <Card clickable bordered>
      <Card.Header>
        <Card.Image
          src={attributes.image_large_url}
          width="100%"
          height={140}
        />
      </Card.Header>
      <Card.Body>
        <Row justify='center'>
          <Text b>{attributes.name}</Text>
        </Row>
        <Row justify='center'>
          <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>$ {attributes.price}</Text>
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