import React from "react";
import { Context } from "../Context";
import { Navbar } from "../Components/Navbar"
import { ItemCard } from "../Components/Card"
import { Container, Grid } from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";

function AppUI() {
  const { items } = React.useContext(Context);
  return (
    <>
      <Navbar />
      <Container fluid>
        <Grid.Container gap={2}>
          {items.map((items, id) => (
            <Grid xs={12} sm={3} md={3} key={id}>
              <Link to={`/item/${items.id}`}>
                <ItemCard attributes={items.attributes} />
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </>
  )
}

export { AppUI };