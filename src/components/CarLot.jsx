import React, {useEffect, useState} from "react";
import Search from "./Search";
import Cars from "./Cars";
import NewCarForm from "./NewCarForm";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";





function CarLot() {

const [cars, setCars] = useState([])
const [search, setSearch] = useState("")


useEffect((e) => {
  fetch("http://localhost:3001/cars")
  .then(res => res.json())
  .then(cars => setCars(cars))
}, [])

const addCar = (car) => {
  setCars(
    [...cars, car]
  )
}


const filteredCars= [...cars].filter((el) => {
  return el.car_make.toLowerCase().includes(search.toLowerCase())
})




  return (
    <Container>
      <Grid container spacing={5}>

        <Grid item xs={6}>
          <Search search={search} setSearch={setSearch} /> {/**You can edit this line */}
        </Grid>

        <Grid item xs={6}>
          <NewCarForm addCar={addCar}/> {/**You can edit this line */}
        </Grid>

        <Grid item xs={12}>
          {/** enter your code below */}
          <Cars cars={filteredCars}/>
          {/** enter your code above */}
        </Grid>

      </Grid>
    </Container>
  );
}

export default CarLot;



//1. SEE ALL OF THE CARS ON THE LOAD WHEN THE APPLICATION LOADS -- GET--


//2. ADD A NEW CAR LISTING TO THE LOT AND HAVE 
//IT SHOW UP IN THE DOM -- POST--