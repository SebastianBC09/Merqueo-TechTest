import React from "react";
import { Context } from "../Context";
import { Navbar } from "../Components/Navbar"
import { ItemCard } from "../Components/Card"
import { Container, Grid } from "@nextui-org/react";

function AppUI() {
  const { items } = React.useContext(Context);
  return (
    <>
      <Navbar />
      <Container fluid>
        <Grid.Container gap={2}>
          {items.map((items, id) => (
            <Grid xs={12} sm={3} md={3} key={id}>
              <ItemCard id={items.id} attributes={items.attributes} />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </>
  )
}

export { AppUI };