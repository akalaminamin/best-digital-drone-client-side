import React from "react";
import { Typography, Container, Button, Box } from "@mui/material";
import bannerBg from "../../../Images/drone-1-1-1024x658.jpg";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root:{
    minHeight: "90vh",
    background:`linear-gradient(100deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bannerBg}) no-repeat center/cover`,
    display: "flex", alignItems: "center",
  },
  
  h3:{
    fontSize:"55px",
    fontWeight:"700",
    lineHeight:"70px",
    color:"#fff"
  },
  para:{
    fontSize:"20px",
    fontWeight:"400",
    lineHeight:"30px"
  },
  btns:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"

  }
})

const Banner =() => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Container sx={{ color:"#fff"}}>
        <Box sx={{ textAlign: "left", textAlign:"center" }}>
          <Typography
            variant="h3"
            paragraph
            className={classes.h3}
          >
            Offering a full range of UAV Aerial Services.
          </Typography>
          <Typography className={classes.para} variant="body2" color="inherit" component="p" paragraph>
            It is a long established fact that a reader will be distracted by
            the <br />
            readable content of a page when looking at its layout.
          </Typography>
          <Box className={classes.btns}>
          <Button variant="contained" color="success" sx={{mx:2}} paragraph>
            Buy Now
          </Button>
          <Button variant="contained" color="success" sx={{mx:2}} paragraph>
            All Services
          </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
