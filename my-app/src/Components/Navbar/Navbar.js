import React from 'react';
import { Col, Row, Card, Container, Text } from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <Container fluid xl>
      <Card color="error">
        <Row align='center'>
          <Col span={10}>
            <Text h1 color='#F4F4F4'>Mercato!</Text>
          </Col>
          <Col span={2}>
            <Row>
              <Col span={3}><FaShoppingCart /></Col>
              <Col span={9}><Text h5 color='#F4F4F4'>Total: $45.769,86 </Text></Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container >
  )
}

export { Navbar };


