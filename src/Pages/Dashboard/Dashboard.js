import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Avatar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import MyOrders from "./UserAccess/MyOrders/MyOrders";
import Pay from "./UserAccess/Pay/Pay";
import AddReview from "./UserAccess/AddReview/AddReview";
import AddProduct from "./AdminAccess/AddProduct/AddProduct";
import MakeAdmin from "./AdminAccess/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./AdminAccess/ManageAllOrders/ManageAllOrders";
import ManageProduct from "./AdminAccess/ManageProduct/ManageProduct";
import useAuth from "../../Hooks/useAuth";
import AddIcon from "@mui/icons-material/Add";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReviewsIcon from "@mui/icons-material/Reviews";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AdminRoute from "../../Component/AdminRoute/AdminRoute";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@mui/styles";
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

  const useStyles = makeStyles({
    listItemColor: {
      color: "#fff",
      marginLeft: "24px",
      fontWeight: "700",
    },
    listItemIconColor: {
      color: "#fff",
    },
  });
  const { listItemColor, listItemIconColor } = useStyles();
  const drawer = (
    <div>
      <Toolbar
        sx={{ color: "#fff", fontWeight: "bold", textTransform: "upperCase" }}
      >
        {displayname}
      </Toolbar>
      <Divider />
      <List>
        {!admin ? (
          <>
            <ListItem button component={Link} to={`${url}/myOrders`}>
              <ListItemIcon>
                <ManageAccountsIcon className={listItemIconColor} />
                <ListItemText className={listItemColor} primary="My Orders" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/pay`}>
              <ListItemIcon>
                <CreditCardIcon className={listItemIconColor} />
                <ListItemText className={listItemColor} primary="Payment" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/addReview`}>
              <ListItemIcon>
                <ReviewsIcon className={listItemIconColor} />
                <ListItemText className={listItemColor} primary="Add Review" />
              </ListItemIcon>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to={`${url}/addProduct`}>
              <ListItemIcon>
                <AddIcon className={listItemIconColor} />
                <ListItemText className={listItemColor} primary="Add Product" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/makeAdmin`}>
              <ListItemIcon>
                <SupervisorAccountIcon className={listItemIconColor} />
                <ListItemText className={listItemColor} primary="Make Admin" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/manageAllOrders`}>
              <ListItemIcon>
                <ManageAccountsIcon className={listItemIconColor} />
                <ListItemText
                  className={listItemColor}
                  primary="Manage All Orders"
                />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} to={`${url}/manageProduct`}>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon className={listItemIconColor} />
                <ListItemText
                  className={listItemColor}
                  primary="Manage Product"
                />
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
          background: "darkblue",
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
            Dashboard
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
                  <Avatar sx={{ mx: 2 }} />
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
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "darkblue",
              color: "#fff",
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
              background: "darkblue",
              color: "#fff",
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
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
export default Dashboard;
