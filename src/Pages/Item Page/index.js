import React from "react";
import { Navbar } from "../../Components/Navbar";
import { Text, Container, Card, Row, Col, Spacer, Button } from "@nextui-org/react";
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
      <Spacer y={1} />
      <Container fluid>
        <Card bordered css={{
          background: "$red100",
          mw: "100%"
        }}
        >
          <Row justify="center" align="center">
            <Text h1 css={{
              color: "$red900"
            }}>Detalles del Producto</Text>
          </Row>
          <Row>
            <Col span={8} >
              <Card bordered css={{
                mw: "97%"
              }}>
                <Row justify="center" align="center">
                  <Text h2 css={{
                    color: "$red800"
                  }}>{itemData.attributes.name}</Text>
                </Row>
                <Row>
                  <Text h3 css={{
                    color: "$red800"
                  }}>Precio: ${itemData.attributes.price}</Text>
                </Row>
                <Row>
                  <Text h3 css={{
                    color: "$red800"
                  }}>Precio en oferta: ${itemData.attributes.special_price}</Text>
                </Row>
                <Row justify="flex-end">
                  <Text h4 css={{
                    color: "$red800"
                  }}>{itemData.attributes.pum}</Text>
                </Row>
              </Card>
            </Col>
            <Col span={4}>
              <Card bordered >
                <Card.Header>
                  <Card.Image
                    src={itemData.attributes.image_medium_url}
                    width={150}
                    height={150}
                    alt={itemData.attributes.slug}
                    objectFit="cover"
                  />
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Text h5 css={{
                      color: "$red700"
                    }}>Cantidad: {itemData.attributes.quantity}</Text>
                  </Row>
                  <Row>
                    <Text h5 css={{
                      color: "$red700"
                    }}>Unidades: {itemData.attributes.unit}</Text>
                  </Row>
                  <Row>
                    <Text h5 css={{
                      color: "$red700"
                    }}>Volulmen: {itemData.attributes.volume}</Text>
                  </Row>
                  <Row>
                    <Text h5 css={{
                      color: "$red700"
                    }}>Peso: {itemData.attributes.weight}</Text>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row justify='center'>
                    <Button size="lg" rounded flat color="error">Comprar</Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

        </Card>
      </Container>
    </>
  )
}

export { ItemPage };