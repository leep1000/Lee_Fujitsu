import React from "react";
import "./Navbar.css";


function Navbar() {
  function handleClick(event, id) {
    event.preventDefault();
    console.log("The link was clicked.");
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a
            href="#artist-studio"
            className="nav-link"
            onClick={(e) => handleClick(e, "artist-studio")}
          >
            Artist Studio
          </a>
        </li>
        <li>
          <a href="#science-lab" className="nav-link">
            Science Lab
          </a>
        </li>
        <li>
          <a
            href="#top-of-page"
            className="nav-link"
            onClick={(e) => handleClick(e, "top-of-page")}
          >
            Logo
          </a>
        </li>
        <li>
          <a
            href="#music-massage"
            className="nav-link"
            onClick={(e) => handleClick(e, "music-massage")}
          >
            Music Massage
          </a>
        </li>
        <li>
          <a href="#code-play" className="nav-link">
            Code Play
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
