import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import CGUScreen from "./containers/CGUScreen";
import "./app.css";

const Shell = () => (
  <div className="wrapper d-flex flex-column justify-content-between">
    <Header />
    <Home />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Shell />
          </Route>
          <Route path="/eatuntil/cgu">
            <CGUScreen />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
