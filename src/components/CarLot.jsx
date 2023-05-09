import React from "react";
import Search from "./Search";
import Cars from "./Cars";
import NewCarForm from "./NewCarForm";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
function CarLot() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Search /> {/**You can edit this line */}
        </Grid>
        <Grid item xs={6}>
          <NewCarForm /> {/**You can edit this line */}
        </Grid>
        <Grid item xs={12}>
          {/** enter your code below */}
          <Cars />
          {/** enter your code above */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarLot;
