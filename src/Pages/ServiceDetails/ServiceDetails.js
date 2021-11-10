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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Divider,
} from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetail, setServiceDetail] = useState([]);
  const [singleService, setSingleService] = useState({});
  const [purchaseData, setPurchaseData] = useState();
  const { currentUser } = useAuth();
  const { register, handleSubmit, errors } = useForm();

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

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data) => {
    setPurchaseData(data);
    setOpen(false);
  };
  return (
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Purchase </DialogTitle>
        <Divider />
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="dense"
              defaultValue={currentUser?.displayName}
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              required
              {...register("name", { required: true })}
            />
            <TextField
              margin="dense"
              defaultValue={currentUser?.email}
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              required
              {...register("email", { required: true })}
            />
            <TextField
              margin="dense"
              label="Street address"
              type="text"
              fullWidth
              variant="standard"
              required
              {...register("address", { required: true })}
            />
            <TextField
              margin="dense"
              label="Town / City"
              type="text"
              fullWidth
              variant="standard"
              required
              {...register("twon", { required: true })}
            />
            <TextField
              margin="dense"
              label="Phone"
              type="tel"
              fullWidth
              variant="standard"
              required
              {...register("phone", { required: true })}
            />
            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
              Purchase
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ServiceDetails;
