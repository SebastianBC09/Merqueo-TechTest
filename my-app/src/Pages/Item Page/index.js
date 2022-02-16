import React from "react";
import { Navbar } from "../../Components/Navbar";
import { Text, Container } from "@nextui-org/react";
import { useParams } from "react-router-dom";

function ItemPage() {
  let params = useParams();
  return (
    <>
      <Navbar />
      <Container>
        <Text>Item Details: ID Number {params.itemId}</Text>
      </Container>
    </>
  )
}

export { ItemPage };