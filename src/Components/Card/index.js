import React from 'react';
import { Card, Row, Text, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function ItemCard(props) {
  const { id, attributes } = props;
  return (

    <Card clickable bordered>
      <Link to={`/item/${id}`}>
        <Card.Header>
          <Card.Image
            src={attributes.image_large_url}
            width="100%"
            height={140}
            alt={attributes.slug}
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
      </Link>
      <Card.Footer>
        <Row justify='center'>
          <Button rounded color="error">Comprar</Button>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export { ItemCard };