import React, { useState, useEffect } from "react";
import Service from "../../Component/Home/Services/Service/Service";
import NavBar from "../../Shared/NavBar/NavBar";
import { Grid, Container } from "@mui/material";
import axios from "axios";
import Footer from "../../Shared/Footer/Footer";

const Explore = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/droneServices")
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
