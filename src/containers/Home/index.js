import React from "react";

import Header from "../../components/Header";
import "./home.css";
import eatuntilLogo from './eu-logo.png';
import bqlLogo from './bql-logo.png';

function Home() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="box box-eatuntil">
            <div className="row h-100">
              <div className="col-6 d-flex flex-column align-items-center text-center mt-3">
                <h4 className="box-title">Eat Until</h4>
                <p className="box-text">
                  Manage your inventories and never waste any food again.
                </p>
                <img
                  className="box-logo"
                  src={eatuntilLogo}
                  alt="Eat Until logo"
                />
              </div>
              <div className="col-6 box-screen box-screen-eu"></div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="box box-bql">
            <div className="row h-100">
              <div className="col-6 d-flex flex-column align-items-center text-center mt-3">
                <h4 className="box-title">Bicloo Quick Look</h4>
                <p className="box-text">
                  Manage your inventories and never waste any food again.
                </p>
                <img
                  className="box-logo"
                  src={bqlLogo}
                  alt="Bicloo Quick Look logo"
                />
              </div>
              <div className="col-6 box-screen box-screen-bql"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
