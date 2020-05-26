import React from "react";

import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <span>© piRstone {year}</span>
        <a
          href="https://github.com/piRstone"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
        <a href="mailto:contact@pirstone.com">Contact</a>
      </p>
    </footer>
  );
}

export default Footer;
