import React from 'react';
import { Col, Row, Card, Container, Text } from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container fluid>
      <Card color="error">
        <Row align='center'>
          <Col span={10}>
            <Text h1 color='#F4F4F4'>
              <Link to="/">
                Mercato!
              </Link>
            </Text>
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


