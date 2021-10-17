import React, { useState } from "react";
import { useHistory, BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Auth - Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import Login from "./pages/Login";

/// Dashboard
import Home from "./components/Dashboard/Home";
import Company from "./components/Dashboard/Company";
import AddCompany from "./components/Dashboard/AddCompany";
import EditCompany from "./components/Dashboard/EditCompany";
import EditEmployer from "./components/Dashboard/EditEmployer";
import Employer from "./components/Dashboard/Employer";
import AddEmployer from "./components/Dashboard/AddEmployer";
import EditTask from "./components/Dashboard/EditTask";
import Task from "./components/Dashboard/Task";
import AddTask from "./components/Dashboard/AddTask";
import Store from "./components/Dashboard/Store";
import Shop from "./components/Dashboard/Shop";
import AddProduct from "./components/Dashboard/AddProduct";
import EditProduct from "./components/Dashboard/EditProduct";
import LoginContextProvider from "../context/LoginContext";
import "./index.css";
import "./chart.css";


const Markup = () => {
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  let pagePath = path.split("-").includes("login");
  console.log(path)
  const [activeEvent, setActiveEvent] = useState(!path);
  return (
    <LoginContextProvider>
    <Router >
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}`}
      >
        {!pagePath  && (
          <Nav
            onClick={() => setActiveEvent(!activeEvent)}
            activeEvent={activeEvent}
            onClick2={() => setActiveEvent(false)}
            onClick3={() => setActiveEvent(true)}
          />
        )}
        <div
          className={` ${!path && activeEvent ? "rightside-event" : ""} ${
            !pagePath ? "content-body" : ""
          }`}
        >
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Home} />
                <Route exact path='/Company' component={Company} />
                <Route exact path='/Employers' component={Employer} />
                <Route exact path='/task' component={Task} />
                <Route exact path='/AddTask' component={AddTask} />
                <Route exact path='/EditTask/:id' component={EditTask} />
                <Route exact path='/AddCompany' component={AddCompany} />
                <Route exact path='/EditCompany/:id' component={EditCompany} />
                <Route exact path='/EditEmployer/:id' component={EditEmployer} />
                <Route exact path='/AddEmployer' component={AddEmployer} />
                <Route exact path='/store' component={Store} />
                <Route exact path='/AddProduct' component={AddProduct} />
                <Route exact path='/edit-product/:id' component={EditProduct} />
                <Route exact path='/shop' component={Shop} />
            </Switch>
          </div>
        </div>
       <Footer />
      </div>
    </Router>
    </LoginContextProvider>
  );
};

export default Markup;


