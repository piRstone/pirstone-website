import React from "react";

import Header from "./components/Header";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import './app.css';

function App() {
  return (
    <div className="container">
      <div className="wrapper d-flex flex-column justify-content-between">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
