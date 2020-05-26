import React from "react";
import i18n from "i18next";

import "./header.css";

function Header() {
  const changeLanguage = () => {
    const lng = i18n.language === 'fr' ? 'en' : 'fr';
    localStorage.setItem('language', lng); // Save user choice
    i18n.changeLanguage(lng);
  }

  return (
    <header className="d-flex flex-row align-items-center justify-content-between">
      <p className="header-title">piRstone</p>
      <div>
        <a href="#" onClick={changeLanguage} className="language">
          {i18n.language.toLocaleUpperCase()}
        </a>
      </div>
    </header>
  );
}

export default Header;
