import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
  // const { currentUser } = useAuth();
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      auth?.currentUser ? (
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
