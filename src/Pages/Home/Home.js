import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import { Container } from "@mui/material";
import Banner from "../../Component/Home/Banner/Banner";
import Services from "../../Component/Home/Services/Services";
import Review from "../../Component/Home/Review/Review";
import Footer from "../../Shared/Footer/Footer";
import About from "../../Component/Home/About/About";
const Home = () => {
  return (
    <>
      {/* <h1>In the Name of Allah</h1> */}
      <NavBar />
      <Banner />
      <Services />
      <About />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
