import React from 'react';
import { Card, Text, Row, Grid } from "@nextui-org/react";

function CardComponent() {
  return (
    <Grid xs={6} sm={3}>
      <Card hoverable clickable color={'gradient'}>
        <Card.Body>
          <Card.Image />
        </Card.Body>
        <Card.Footer justify="flex-start">
          <Row wrap='wrap' justify='space-between'>
            <Text b>Item name would be here!</Text>
            <Text css={{ color: "$accents4", fontWeight: "$semibold" }}> $15.99 </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export { CardComponent };