import React from "react";
import { Typography, Container, Button, Box } from "@mui/material";
import bannerBg from "../../../Images/9.jpg";
import { makeStyles } from "@mui/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minHeight: "90vh",
    background: `linear-gradient(100deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${bannerBg}) no-repeat center/cover`,
    display: "flex",
    alignItems: "center",
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container sx={{ color: "#fff" }}>
        <Box sx={{ textAlign: "left", textAlign: "center" }}>
          <Typography variant="h3" paragraph>
            Offering a full range of UAV Aerial Services.
          </Typography>
          <Typography
            sx={{fontWeight: "400", lineHeight: "30px" }}
            variant="body2"
            color="inherit"
            component="p"
            paragraph
          >
            It is a long established fact that a reader will be distracted by
            the <br />
            readable content of a page when looking at its layout.
          </Typography>
          <Box className={classes.btns}>
            <Button
            component={Link}
              variant="contained"
              color="secondary"
              size="large"
              to="/explore"
              sx={{ mx: 2 }}
              paragraph
            >
              Buy Now
            </Button>
            <Button
            component={Link}
            to="/explore"
              variant="contained"
              color="secondary"
              sx={{ mx: 2 }}
              size="large"
              paragraph
            >
              All Services
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
