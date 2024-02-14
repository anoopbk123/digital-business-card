import React from "react";
import "./ProfilePicture.css";
import profilePicture from "../../assets/images/profile-photo.jpg";

export default function ProfilePicture() {
  return (
    <>
      <img
        src={profilePicture}
        alt="profile-photo"
        className="profile-picture"
      />
    </>
  );
}
