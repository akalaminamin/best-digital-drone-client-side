import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActions,
  Grid,
  TextField,
  Box,
  Button
} from "@mui/material";
import ParchaseDialog from "../../Component/ParchaseDialog/ParchaseDialog";
import NavBar from "../../Shared/NavBar/NavBar";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetail, setServiceDetail] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/droneServices`).then((res) => {
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
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} md={9}>
            <Card elevation={0}>
              <CardMedia component="img" image={image_url} alt="drone" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
                <Typography variant="subtitle2" color="text.success">
                  {price}
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
    </>
  );
};

export default ServiceDetails;
