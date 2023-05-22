import React, { useState } from "react";
import "./fujitsu.css";

function FujitsuCard(props) {
  // set the intial useState so the the info is not visible on page load
  const [infoVisible, setInfoVisible] = useState(false);

  // function to toggle the infoVisible state
  const handleClick = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <section className="fujitsu-section">
      <h2>{props.item.name}</h2>
      <img src={props.item.image} alt={props.item.name} />
      <button onClick={handleClick}>Reveal Info</button>
      {infoVisible && (
        <ul>
          {props.info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FujitsuCard;
