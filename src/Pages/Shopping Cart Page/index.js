import React from "react";
import { Navbar } from "../../Components/Navbar";
import { Text } from "@nextui-org/react";

function ShoppingCartPage() {
  return (
    <>
      <Navbar />
      <Text>Your shopping cart</Text>
      <Text>Your total is: $</Text>
    </>
  )
}

export { ShoppingCartPage };