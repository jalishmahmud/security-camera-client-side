import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import AddProduct from "../AddAProduct/AddProduct";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Header>Dashboard</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Link to={`${url}/pay`}> Pay </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={`${url}/myOrder`}> My Order </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={`${url}/review`}> Review </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={`${url}/manageAllOrders`}> Manage All Orders </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={`${url}/addAProduct`}> Add A Product </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={`${url}/manageProducts`}>Manage Products </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={`${url}/makeAdmin`}> Make Admin </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={`${url}`}> Logout </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={9}>
            <Switch>
              <Route exact path={path}>
                <DashboardHome></DashboardHome>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route path={`${path}/myOrder`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route path={`${path}/addAProduct`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
