import "./App.css";
import React from "react";
import { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Home />
                <Service />
                <About />
                <Contact />
              </Fragment>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/service" component={Service} />
          <Redirect to="/" />
        </Switch>

        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
