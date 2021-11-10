import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NavBar = () => {
  const { logOut, currentUser } = useAuth();
  const displayname = currentUser?.displayName;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
              sx={{ flexGrow: 1, textAlign: "left", textDecoration: "none" }}
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
                  Log out
                </Button>

                {currentUser?.photoURL ? (
                  <Avatar src={currentUser?.photoURL} />
                ) : (
                  <Typography variant="subtitle1" color="inherit">
                    {displayname}
                  </Typography>
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
