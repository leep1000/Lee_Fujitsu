import React from "react";
import "./RandomItem.css";

function RandomItem(props) {
  return (
    <section className="random-item-section">
      <div className="image-container">
        <h2>{props.item}</h2>
        <img src={props.image} alt={props.item} />
      </div>
    </section>
  );
}

export default RandomItem;
