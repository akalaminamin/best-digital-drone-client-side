import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser, isLoading } = useAuth();
  if(isLoading){
    <CircularProgress />
    return
  }
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser?.email ? (
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

export default PrivateRoute;
