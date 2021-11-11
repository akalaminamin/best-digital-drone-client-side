import React, { useState, useEffect } from "react";
import {AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Avatar, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import MyOrders from "./UserAccess/MyOrders/MyOrders";
import Pay from "./UserAccess/Pay/Pay";
import AddReview from "./UserAccess/AddReview/AddReview";
import AddProduct from "./AdminAccess/AddProduct/AddProduct";
import MakeAdmin from "./AdminAccess/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./AdminAccess/ManageAllOrders/ManageAllOrders";
import ManageProduct from "./AdminAccess/ManageProduct/ManageProduct";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../../Component/AdminRoute/AdminRoute";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  let { path, url } = useRouteMatch();
  const { logOut, currentUser, admin } = useAuth();
  const displayname = currentUser?.displayName;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {!admin ? (
          <>
            <ListItem button component={Link} to={`${url}`}>
              <ListItemIcon>
                <MailIcon />
                <ListItemText sx={{ ml: 3 }} primary="My Orders" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/pay`}>
              <ListItemIcon>
                <MailIcon />
                <ListItemText sx={{ ml: 3 }} primary="Pay" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/addReview`}>
              <ListItemIcon>
                <MailIcon />
                <ListItemText sx={{ ml: 3 }} primary="Add Review" />
              </ListItemIcon>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to={`${url}/addProduct`}>
              <ListItemIcon>
                <MailIcon />
                <ListItemText sx={{ ml: 3 }} primary="Add Product" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/makeAdmin`}>
              <ListItemIcon>
                <MailIcon />
                <ListItemText sx={{ ml: 3 }} primary="Make Admin" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/manageAllOrders`}>
              <ListItemIcon>
                <MailIcon />
                <ListItemText sx={{ ml: 3 }} primary="Manage All Orders" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/manageProduct`}>
              <ListItemIcon>
                <MailIcon />
                <ListItemText sx={{ ml: 3 }} primary="Manage Product" />
              </ListItemIcon>
            </ListItem>
          </>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            {Dashboard}
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
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
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct />
          </AdminRoute>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview />
          </Route>
          <Route path={`${path}`}>
            <MyOrders />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
export default Dashboard;
