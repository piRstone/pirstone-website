import React from "react";
import { useTranslation } from 'react-i18next';

import "./home.css";
import eatuntilLogo from "./img/eu-logo.png";
import bqlLogo from "./img/bql-logo.png";
import appStoreBadge from "./img/app-store-badge.png";
import playStoreBadge from "./img/play-store-badge.png";
import chromeStoreBadge from "./img/chrome-webstore-badge.png";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="box box-eatuntil">
          <div className="row h-100">
            <div className="col-6 d-flex flex-column align-items-center text-center mt-3 pl-4">
              <h4 className="box-title">Eat Until</h4>
              <p className="box-text">{t("home:euText")}</p>
              <img
                className="box-logo"
                src={eatuntilLogo}
                alt="Eat Until logo"
              />
            </div>
            <div className="col-6 box-screen box-screen-eu"></div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center mt-2">
          <p className="soon">{t("home:soon")}</p>
          <img
            className="store-badge"
            src={appStoreBadge}
            alt="Download on the App Store"
          />
          <img
            className="store-badge"
            src={playStoreBadge}
            alt="Get in on the Play Store"
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="box box-bql">
          <div className="row h-100">
            <div className="col-6 d-flex flex-column align-items-center text-center mt-3 pl-4">
              <h4 className="box-title">Bicloo Quick Look</h4>
              <p className="box-text">{t("home:bqlText")}</p>
              <img
                className="box-logo"
                src={bqlLogo}
                alt="Bicloo Quick Look logo"
              />
            </div>
            <div className="col-6 box-screen box-screen-bql"></div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center mt-2">
          <a
            href="https://chrome.google.com/webstore/detail/bicloo-quick-look/flnefplpgicfiidnngabfhelbljjolag"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="store-badge"
              src={chromeStoreBadge}
              alt="Available in the Chrome Web Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
