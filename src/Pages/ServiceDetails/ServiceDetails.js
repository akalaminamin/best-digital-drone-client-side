import {
    Box,
    Button, Card,
    CardActions, CardContent, CardMedia, Container, Grid,
    TextField, Typography
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ParchaseDialog from "../../Component/ParchaseDialog/ParchaseDialog";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetail, setServiceDetail] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    axios.get(`https://enigmatic-stream-51586.herokuapp.com/droneServices`).then((res) => {
      setServiceDetail(res.data);
    });
  }, []);

  useEffect(() => {
    if (serviceDetail.length > 0) {
      const matchData = serviceDetail.find((data) => data._id == serviceId);
      setSingleService(matchData);
    }
  }, [serviceDetail]);
  const { title, desc, image_url, price } = singleService;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={2} sx={{ mt: 4, textAlign:"left" }}>
          <Grid item xs={12} md={9}>
            <Card elevation={0}>
              <CardMedia component="img" sx={{height:"500px"}} image={image_url} alt="drone" />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" sx={{color:"rgba(34, 45, 53, 0.7)"}}>
                  {desc}
                </Typography>
                <Typography variant="h6" color="text.success">
                  $ {price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="lg" variant="contained" onClick={handleClickOpen}>
                  Buy now
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{p:3, background:"#F5F5F5", display:"flex", flexDirection:"column"}}>
              <Typography variant="h6" color="initial" sx={{fontWeight:"bold"}}>
                SUBSCRIBE TO NEWSLETTER
              </Typography>
              <TextField 
              fullWidth
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
        <ParchaseDialog open={open} setOpen={setOpen} />
      </Container>
      <Footer />
    </>
  );
};

export default ServiceDetails;
