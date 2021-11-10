import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import { Container } from "@mui/material";
import Banner from "../../Component/Home/Banner/Banner";
import Services from "../../Component/Home/Services/Services";
const Home = () => {
  return (
    <>
      {/* <h1>In the Name of Allah</h1> */}
      <NavBar />
      <Banner />
      <Container>
          <Services />
      </Container>
    </>
  );
};

export default Home;
