import React from "react";
import RegisterForm from "./RegisterForm";
import NavBar from "../../Shared/NavBar/NavBar";
import { Box } from "@mui/material";
import {makeStyles} from "@mui/styles";
const Register = () => {
  const useStyles = makeStyles({
    boxHeight:{
      height:"90vh",
      display:"flex", alignItems:"center", justifyContent:"center"
    }
  })
  const {boxHeight} = useStyles();
  return (
    <>
    <NavBar />
    <Box className={boxHeight}>
        <RegisterForm />
    </Box>
    </>
  );
};

export default Register;
