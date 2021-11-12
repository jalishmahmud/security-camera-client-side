import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import ExploreAllCctv from "./pages/AllCctv/ExploreAllCctv/ExploreAllCctv";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Navigation from "./pages/Shared/Navigation/Navigation";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/PrivatreRoute/PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/allCctv">
            <ExploreAllCctv></ExploreAllCctv>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
