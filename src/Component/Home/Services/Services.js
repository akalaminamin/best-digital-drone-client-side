import React, { useState, useEffect } from "react";
import Service from "./Service/Service"
import { Grid } from "@mui/material";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/droneServices")
      .then((res) => setServices(res.data));
  });
  return (
    <>
      <h3>Services page</h3>
      <Grid container spacing={2} sx={{my:5}}>
        {services.slice(0 ,6).map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service._id}>
            <Service service={service}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Services;
