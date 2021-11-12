import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import { Container } from "@mui/material";
import Banner from "../../Component/Home/Banner/Banner";
import Services from "../../Component/Home/Services/Services";
import Review from "../../Component/Home/Review/Review";
import Footer from "../../Shared/Footer/Footer"
const Home = () => {
  return (
    <>
      {/* <h1>In the Name of Allah</h1> */}
      <NavBar />
      <Banner />
      <Container>
        <Services />
        <Review />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
