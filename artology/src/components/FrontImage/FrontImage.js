import React from "react";
import "./FrontImage.css";
import frontpage from "./frontpage.jpg";


function FrontImage() {
  return (
    <div>
      <img name="frontimage" src={frontpage} alt="Swimming Guy"/>
    </div>
  );
}

export default FrontImage;
