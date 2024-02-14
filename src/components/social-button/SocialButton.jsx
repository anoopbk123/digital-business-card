import React from "react";
import "./SocialButton.css";

export default function SocialButton({ icon, text, color, bg }) {
  return (
    <>
      <button
        className="social-button"
        style={{ color: `${color}`, backgroundColor: `${bg}` }}
      >
        <span className="social-btn-icon">
          <i className={icon}></i>
        </span>
        {text}
      </button>
    </>
  );
}
