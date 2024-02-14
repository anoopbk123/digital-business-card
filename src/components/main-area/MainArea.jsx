import React from "react";
import "./MainArea.css";
import SocialButton from "../social-button/SocialButton";
import icons from "../../assets/icons";
import Sections from "../section/Sections";
import sectionData from "../../assets/data/sectionData.js";
import resume from "../../assets/Anoop_B_K Resume.pdf";

export default function MainArea() {
  return (
    <main className="main-area">
      <h1 className="profile-name">Anoop B K</h1>
      <h2 className="occupation">MERN Full Stack Developer</h2>
      <div className="button-container d-flex justify-between">
        <div>
          <a href="mailto:anoopkavalakkal@gmail.com">
            <SocialButton
              icon={icons.email}
              text="Email"
              color="black"
              bg="white"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/anoop-b-k-b0774b201">
            <SocialButton
              icon={icons.linkedin}
              text="Linkedin"
              color="white"
              bg="#5093E2"
            />
          </a>
        </div>
      </div>
      {sectionData.map((value) => (
        <Sections
          key={value.key}
          title={value.title}
          description={value.description}
        />
      ))}
      <div>
        <a href={resume} download>
          <SocialButton
            icon={icons.resume}
            text="Download Resume"
            color="black"
            bg="white"
          />
        </a>
      </div>
    </main>
  );
}
