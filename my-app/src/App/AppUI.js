import React from "react";
import { Context } from "../Context";
import { Navbar } from "../Components/Navbar/Navbar"
import { CardComponent } from "../Components/Card/Card"
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
              <CardComponent attributes={items.attributes} />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </>
  )
}

export { AppUI };