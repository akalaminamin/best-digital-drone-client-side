import React from "react";
import { Grid, Container, Box, ListItem, ListItemText, Typography, TextField, Button } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import ImgOne from "../../Images/drone-2-1.jpg"
// import ImgTwo from "../../../images/drone-3-1.jpg"
// import ImgThree from "../../images/drone-4-1.jpg"
// import ImgFour from "../../images/drone-5-1.jpg"
// import ImgFive from "../../images/drone-7-1.jpg"
// import ImgSix from "../../images/drone-8-1.jpg"
// import ImgSeven from "../../images/drone-9-1.jpg"
// import ImgEight from "../../images/drone-10-1.jpg"
// import ImgNine from "../../images/drone-11-1.jpg"
// import ImgTen from "../../images/drone-13-1.jpg"

const Footer = () => {
  return (
    <Box sx={{ background: "black", color: "#fff", py: 4 }}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <h3 style={{ textAlign: "left", textTransform: "uppercase" }}>
              Information
            </h3>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Our Team" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Clients" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Contacts" />
              </Box>
            </ListItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <h3 style={{ textAlign: "left", textTransform: "uppercase" }}>
              Services
            </h3>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Event Coverage" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Property Tours" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Multimedia" />
              </Box>
            </ListItem>
          </Grid>
          <Grid item xs={12} md={3}>
          <h3 style={{ textAlign: "left", textTransform: "uppercase" }}>
              Contact Us
            </h3>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Facebook" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Twitter" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "red", mr: "5px" }}
                />
                <ListItemText primary="Linkedin" />
              </Box>
            </ListItem>
          </Grid>
          <Grid item xs={12} md={3}>
          <Box sx={{p:3, display:"flex", flexDirection:"column"}}>
              <Typography variant="h6" color="initial" sx={{fontWeight:"bold", color:"#fff"}}>
                SUBSCRIBE TO NEWSLETTER
              </Typography>
              <TextField 
                fullWidth
                sx={{backgroundColor:"#fff"}}
                type="email"
                margin="dense"
                label="Your email"
                variant="filled"
                color="success"
              />
              <Button variant="contained" fullWidth sx={{mt: 1}}>
                Subscribe
              </Button>
          </Box>
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
