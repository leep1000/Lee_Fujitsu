import React from "react";
import "./Arrow.css";

function Arrow() {
  const handleClick = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const sections = Array.from(document.querySelectorAll("[id]"));
    const nextSection = sections.find((section) => {
      const sectionTop =
        section.getBoundingClientRect().top + currentScrollPosition;
      return sectionTop > currentScrollPosition;
    });

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="arrow-container" onClick={handleClick}>
      <i className="arrow-down" />
    </div>
  );
}

export default Arrow;
