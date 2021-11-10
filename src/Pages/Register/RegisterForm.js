import * as React from "react";
import {
  TextField,
  Paper,
  Box,
  Container,
  Button,
  Alert,
} from "@mui/material/";
import Typography from "@mui/material/Typography";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = React.useState();
  const { signUp, error, setError, googleSignIn } = useAuth();
  const history = useHistory();
  const onSubmit = async (data) => {
    const { email, password, name, confirmPassword } = data;
    if (password !== confirmPassword) {
      return setError("Password don't Match");
    }
    try {
      setError("");
      setLoading(true);
    await signUp(email, password, name);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed To create an account");
      setLoading(false);
    }
  };

  return (
    <Container>
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
            label="Name"
            type="text"
            variant="standard"
            {...register("name", { required: true })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email Address"
            name="email"
            variant="standard"
            {...register("email", { required: true })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Password"
            name="password"
            type="password"
            variant="standard"
            {...register("password", { required: true })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Confirm Password"
            type="password"
            variant="standard"
            {...register("confirmPassword", { required: true })}
          />
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ my: 3 }}
          >
            Register
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant="body1" color="initial">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
          <Button
            onClick={googleSignIn}
            variant="contained"
            color="secondary"
            sx={{ my: 3 }}
          >
            Continue with google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
