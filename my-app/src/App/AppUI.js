import React from "react";
import { Container, Grid } from "@nextui-org/react";
import { Navbar } from "../Components/Navbar/Navbar"
import { CardComponent } from "../Components/Card/Card"

function AppUI() {
  return (
    <Container>
      <Navbar />
      <Grid.Container gap={2}>
        <Grid xs={12} sm={3} md={3}>
          <CardComponent />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export { AppUI };