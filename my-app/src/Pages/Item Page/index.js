import React from "react";
import { Navbar } from "../../Components/Navbar";
import { Text, Container, Card, Row, Col } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { Context } from "../../Context/";

function ItemPage() {
  let { items } = React.useContext(Context);
  let params = useParams();
  let item = params.itemId;

  function getItem(id) {
    return items.find(
      itemData => itemData.id === id
    )
  }

  let itemData = getItem(item);
  console.log(itemData)

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row justify="center" align="center">
          <Text h2>Detalles del Producto</Text>
        </Row>
        <Row>
          <Col span={8}>
            <Card color="primary">
              <Row justify="center" align="center">
                <Text h3>{itemData.attributes.name}</Text>
              </Row>
              <Row>
                <Text h4>Precio: ${itemData.attributes.price}</Text>
              </Row>
              <Row>
                <Text h4>Precio en oferta: ${itemData.attributes.special_price}</Text>
              </Row>
              <Row>
                <Text h6>{itemData.attributes.pum}</Text>
              </Row>
              <Text>Item Details: ID Number {params.itemId}</Text>
            </Card>
          </Col>
          <Col span={4}>
            <Card color="gradient">
              <Card.Header>
                <Card.Image
                  src={itemData.attributes.image_medium_url}
                  width="100%"
                  height={500}
                  alt={itemData.attributes.slug}
                />
              </Card.Header>
              <Card.Body>
                <Row>
                  <Text h5>Cantidad: {itemData.attributes.quantity}</Text>
                </Row>
                <Row>
                  <Text h5>Unidades: {itemData.attributes.unit}</Text>
                </Row>
                <Row>
                  <Text h5>Volulmen: {itemData.attributes.volume}</Text>
                </Row>
                <Row>
                  <Text h5>Peso: {itemData.attributes.weight}</Text>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export { ItemPage };