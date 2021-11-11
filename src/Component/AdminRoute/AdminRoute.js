import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const AdminRoute = ({ children, ...rest }) => {
  const { currentUser, isLoading, admin } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
