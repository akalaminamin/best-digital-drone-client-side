import React from "react";
import RegisterForm from "./RegisterForm";
import NavBar from "../../Shared/NavBar/NavBar";
import { Box } from "@mui/material";

const Register = () => {
  return (
    <Box
      sx={{
        Height: "90vh",
      }}
    >
      <NavBar />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default Register;
