import React from "react";
import "./RandomQuestion.css";

function RandomQuestion(props) {
  return (
    <section className="random-question-section">
      <h2>{props.question.question}</h2>
      <button
        onClick={(event) => {
          event.preventDefault(); // Prevent the default behavior (page reload)
          props.getRandomQuestion(); // Call the getRandomItem function passed from the parent component
        }}
      >
        Get a new challenge!
      </button>
    </section>
  );
}

export default RandomQuestion;