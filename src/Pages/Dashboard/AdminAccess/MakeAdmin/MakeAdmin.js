import React from "react";
import { Paper, Box, TextField, Button } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";

const MakeAdmin = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const { currentUser } = useAuth();
  const onSubmit = data =>{
    axios.post(`http://localhost:5000/admin`, data)
      .then(res => {
        if(res.data.acknowledged){
          alert("Admin is successfully added");
          reset();
        }
      })
  }
  return (
    <Paper
      component={Box}
      elevation={4}
      p={4}
      sx={{ width: "70%", mx: "auto" }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          margin="dense"
          label="Email Address"
          fullWidth
          type="email"
          variant="filled"
          required
          {...register("email", { required: true })}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            width="50%"
          >
            Add Admin
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default MakeAdmin;
