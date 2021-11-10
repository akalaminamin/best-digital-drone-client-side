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
  Button,
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
        <Card>
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
        <ParchaseDialog open={open} setOpen={setOpen} />
      </Container>
    </>
  );
};

export default ServiceDetails;
