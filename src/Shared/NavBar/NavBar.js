import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root:{
    background:"#fff", 
    color:"#000"
  }
})
const NavBar = () => {
  const { logOut, currentUser } = useAuth();
  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1}} elevation={5} >
        <AppBar position="static" sx={{background:"#fff", color:"#000"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              color="inherit"
              sx={{ flexGrow: 1, textAlign: "left", textDecoration: "none", display:"inline" }}
            >
              Digital Drone
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/explore">
              Explore
            </Button>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>

            {currentUser?.email ? (
              <>
                <Button
                  onClick={logOut}
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 3 }}
                >
                  <LogoutIcon />
                </Button>

                {currentUser?.photoURL ? (
                  <Avatar src={currentUser?.photoURL} />
                ) : (
                  <>
                <Avatar  sx={{ mx: 2 }}/>
                </>
                )}
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
