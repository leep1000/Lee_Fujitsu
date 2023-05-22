import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RandomItem from "./components/RandomItem/index";
import DNA from "./RandomItem/Image/DNA.png";
import Corona from "./RandomItem/Image/corona2.png";
import Coding from "./RandomItem/Image/Coding.png";
import Arrow from "./components/Arrow";
import FrontImage from "./components/FrontImage/FrontImage";

function App() {
  return (
    <div data-testid="app-component" className="App">
      <header id="top-of-page" className="App-header">
        <Navbar />
        <Arrow />
      </header>
      <main>
        <div ClassName="frontpage-container">
          <FrontImage src={FrontImage} />
        </div>
        <section
          id="artist-studio"
          aria-label="artist-studio"
          className="artist-studio"
        >
          <div className="question-container"></div>
          <div dataclassName="item-container" className="item-container">
            <RandomItem item={`University`} image={DNA} />
            <RandomItem item={`NHS`} image={Corona} />
            <RandomItem item={`Coding`} image={Coding} />
          </div>
        </section>
        <section
          id="fujitsu"
          aria-label="music-massage"
          className="music-massage"
        >
          <div className="question-container"></div>
          <div dataclassName="item-container" className="item-container">
            <RandomItem item={`University`} image={DNA} />
            <RandomItem item={`NHS`} image={Corona} />
            <RandomItem item={`Coding`} image={Coding} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
