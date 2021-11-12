import React from "react";
import { Box, Container, Grid, Typography, Divider, Button } from "@mui/material";
import bannerBg from "../../../Images/dronebanner.jpg";
import { makeStyles } from "@mui/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: `url(${bannerBg}) no-repeat center / cover`,
    height: "600px",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
});
const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          <Grid item sx={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", lineHeight: "50px" }}
            >
              AERIAL PHOTOGRAPHY AND VIDEO PRODUCTION SERVICES
            </Typography>
            <Divider
            sx={{
              width: "100px",
              height: "4px",
              background: "red",
              my: 3,
            }}
          />
            <Typography
              variant="body"
              sx={{color:"#7e8285", lineHeight: "40px" }}
            >
              Quadcopters generally use two pairs of identical fixed pitched propellers; two clockwise and two counterclockwise. These use independent variation of the speed of each rotor to achieve control. By changing the speed of each rotor it is possible to specifically generate a desired total thrust to locate the center.
            </Typography>
            <Button component={Link} to="/explore" variant="contained" color="secondary" sx={{mt:4}}>Our Services</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
