import React, { useState, useEffect } from "react";
import Service from "./Service/Service"
import { Grid, Container, Box, Divider, Typography } from "@mui/material";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/droneServices")
      .then((res) => setServices(res.data));
  });
  return (
    <Container>
      <Box>
          <Typography variant="h3" sx={{ textAlign: "center", mt:4 }}>
            Our Services
          </Typography>
          <Divider
            sx={{
              width: "100px",
              height: "4px",
              background: "red",
              mx: "auto",
              mt: 3,
            }}
          />
        </Box>
      <Grid container spacing={1} sx={{mt:5, mb:10}}>
        {services.slice(0 ,6).map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service._id}>
            <Service service={service}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
