import React from "react";
import { Typography, Container, Button, Box } from "@mui/material";
import bannerBg from "../../../Images/drone-slide2.jpg";
// import { makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles({
//   fontStyle: {
//     fontSize: "46px",
//     fontWeight: "700",
//     lineHeight: "55px",
//   },
// });
const Banner = () => {
//   const classes = useStyles();
  const backgroundImg = {
    background: bannerBg,
    backgroundPosition: "center center",
  };
  return (
    <Box style={{ backgroundImg }}>
      <Container
        sx={{ display: "flex", alignItems: "center", minHeight: "90vh" }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h3"
            color="initial"
            paragraph
          >
            Offering a full range of UAV <br /> Aerial Services.
          </Typography>
          <Typography variant="body2" color="initial" component="p" paragraph>
            It is a long established fact that a reader will be distracted by
            the <br />
            readable content of a page when looking at its layout.
          </Typography>
          <Button variant="contained" color="success" paragraph>
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
