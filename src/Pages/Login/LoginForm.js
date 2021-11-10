import * as React from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Alert,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useHistory, useLocation } from "react-router-dom";
const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const { logIn, error, setError, googleSignIn } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const onSubmit = async (data) => {
    const { email, password } = data;
    logIn(email, password, history, location);
  };

  return (
    <>
      <Paper
        component={Box}
        elevation={3}
        p={3}
        sx={{ display: "flex", alignItems: "center", width: "40%", mx: "auto" }}
      >
        <Box
          component="form"
          sx={{ width: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            fullWidth
            margin="dense"
            label="Email Address"
            variant="standard"
            {...register("email", { required: true })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Password"
            type="password"
            variant="standard"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ my: 3 }}
          >
            Log in
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant="body1" color="initial">
            Create an account? <Link to="/register">Register</Link>
          </Typography>
          <Button
            onClick={()=>googleSignIn(history, location)}
            variant="contained"
            color="secondary"
            sx={{ my: 3 }}
          >
            Continue with google
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default LoginForm;
