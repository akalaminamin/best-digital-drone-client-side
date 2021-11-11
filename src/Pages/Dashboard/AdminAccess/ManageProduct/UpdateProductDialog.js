import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  Divider,
} from "@mui/material";
import axios from "axios";

import useAuth from "../../../../Hooks/useAuth";
const UpdateProductDialog = ({ open, setOpen, singleProduct}) => {


  const { register, handleSubmit} = useForm();
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    setOpen(false);
  };
  // const {title, desc, price, image_url} = singleProduct;
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update</DialogTitle>
        <Divider />
        {/* <DialogContent>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="dense"
              defaultValue={title}
              label="Name"
              type="text"
              fullWidth
              required
              {...register("title", { required: true })}
            />
            <TextField
              margin="dense"
              defaultValue={desc}
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={4}
              required
              {...register("desc", { required: true })}
            />
            <TextField
              margin="dense"
              label="Price"
              defaultValue={price}
              type="number"
              fullWidth
              required
              {...register("price", { required: true })}
            />
            <TextField
              margin="dense"
              label="image_url"
              defaultValue={image_url}
              type="text"
              fullWidth
              required
              {...register("image_url", { required: true })}
            />
            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
              Update
            </Button>
          </Box>
        </DialogContent> */}
      </Dialog>
    </>
  );
};

export default UpdateProductDialog;
