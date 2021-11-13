import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Shared/NavBar/NavBar";
import LoginForm from "./LoginForm";
import { makeStyles } from "@mui/styles";
const Login = () => {
  const useStyles = makeStyles({
    boxHeight:{
      height:"90vh",
      display:"flex", 
      alignItems:"center", 
      justifyContent:"center"
    }
  })
  const {boxHeight} = useStyles();
  return (
    <>
      <NavBar />
      <Box className={boxHeight}>
        <LoginForm />
      </Box>
    </>
  );
};

export default Login;
