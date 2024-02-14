import React from "react";
import "./Sections.css";

export default function Sections({ title, description }) {
  return (
    <section className="section">
      <h3 className="section-head">{title}</h3>
      <p className="section-paragraph">{description}</p>
    </section>
  );
}
