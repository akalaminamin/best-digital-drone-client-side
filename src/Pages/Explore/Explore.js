import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Service from "../../Component/Home/Services/Service/Service";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";

const Explore = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://enigmatic-stream-51586.herokuapp.com/droneServices")
      .then((res) => setServices(res.data));
  });
  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={2} sx={{ my: 5 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service._id}>
              <Service service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};

export default Explore;
