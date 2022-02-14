import React from 'react';
import { Card } from "@nextui-org/react";

function CardComponent() {
  return (
    <Card bordered shadow={false} hoverable css={{ mw: "250px" }}>
      <p>Hoverable Card</p>
    </Card>
  )
}

export { CardComponent };