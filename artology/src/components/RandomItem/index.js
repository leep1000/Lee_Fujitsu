import React from "react";
import "./RandomItem.css";

function RandomItem(props) {
  const adjectives = [
    { name: "happy", image: "happy.jpg" },
    { name: "sad", image: "sad.jpg" },
    { name: "funny", image: "funny.jpg" },
    // Add more adjectives with their associated images
  ];

  const randomAdjective = props.getRandomItem(adjectives);

  return (
    <section className="random-item-section">
      <h2>{randomAdjective.name}</h2>
      <img src={randomAdjective.image} alt={randomAdjective.name} />
      <button onClick={props.getRandomItem}>Change me!</button>
    </section>
  );
}

export default RandomItem;
