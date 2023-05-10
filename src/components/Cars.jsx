import React from "react";
import Grid from "@mui/material/Grid";
import Car from "./Car";



function Cars({cars}) {
  return (
    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
      {
        [...cars].map((el) => {
          return <Car key={el.id}  car={el}/>
        })
      }
    </Grid>
  );
}

export default Cars;
