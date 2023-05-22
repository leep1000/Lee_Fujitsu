import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RandomItem from "./components/RandomItem/index";
import FujitsuCard from "./components/fujitsu/fujitsu";
import DNA from "./RandomItem/Image/DNA.png";
import Corona from "./RandomItem/Image/corona2.png";
import Coding from "./RandomItem/Image/Coding.png";
import Arrow from "./components/Arrow";
import FrontImage from "./components/FrontImage/FrontImage";
import diversity from "./components/fujitsu/diversity.PNG";
import portfolio from "./components/fujitsu/portfolio.PNG";
import values from "./components/fujitsu/values.png";
import university from "./components/fujitsu/university.jpg";
import feedback from "./components/fujitsu/feedback.jpg";
import solutions from "./components/fujitsu/solutions.png";

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
            <FujitsuCard
              item={{ name: "Opportunities", image: portfolio }}
              info={[
                "Worldwide Business",
                "Diverse Portfolio",
                "Shaping the future with projects",
              ]}
            />
            <FujitsuCard
              item={{ name: "Fujitsu Way (和)", image: values }}
              info={["Japanese Wa Concept", "Key Values", "Uvance"]}
            />
            <FujitsuCard
              item={{ name: "Inclusion + Diversity", image: diversity }}
              info={["Inclusive Culture", "Accessibility"]}
            />
          </div>
        </section>
        <section
          id="apprenticeship"
          aria-label="music-massage"
          className="music-massage"
        >
          <div className="question-container"></div>
          <div dataclassName="item-container" className="item-container">
            <FujitsuCard
              item={{ name: "Why Software", image: solutions }}
              info={[
                "How tech affects us",
                "Learning new skills",
                "Ability to make a difference",
              ]}
            />
            <FujitsuCard
              item={{ name: "Blended Learning", image: university }}
              info={["Formal Education", "Work Experience"]}
            />
            <FujitsuCard
              item={{ name: "Recommendations", image: feedback }}
              info={["Positive Reviews!"]}
            />
          </div>
        </section>
        <section id="conclusion">
          <img
            src="https://media.tenor.com/gYIcyJlm9rwAAAAC/minions-me.gif"
            alt="pick-me-gif"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
