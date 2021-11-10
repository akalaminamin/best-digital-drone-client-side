import React from "react";
import { Container } from "@mui/material";
import NavBar from "../../Shared/NavBar/NavBar";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <NavBar />
      <Container>
        <LoginForm />
      </Container>
    </>
  );
};

export default Login;
