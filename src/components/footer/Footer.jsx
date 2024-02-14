import React from "react";
import "./Footer.css";
import footerData from "../../assets/data/footerData";

export default function Footer() {
  return (
    <footer className="footer d-flex justify-content justify-around">
      {footerData.map((value) => (
        <div key={value.key}>
          <a href={value.link} className="footer-social-icon">
            <i className={value.icon}></i>
          </a>
        </div>
      ))}
    </footer>
  );
}
