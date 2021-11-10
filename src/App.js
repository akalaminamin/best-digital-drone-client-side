import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "./Shared/NavBar/NavBar";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Contexts/AuthContext";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <NavBar /> */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
