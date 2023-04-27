import { useState, useEffect } from "react";
import React from "react";
import MusicButton from "./MusicButton";
import BreathingButton from "./BreathingButton";
import Transcript from "./Transcript";
import Wave from "./wave.gif";
import "./Meditation.css";

/*
I want to make component that will be a section of the webpage dedicated to a meditating activity
I want to have a button that will generate a random meditation activity
The generated content should have an audio file that the user can listen to, pause and play
The audio file will have a scrubber that the user can use to move to different parts of the audio file
There should also be a button that plays relaxing music when pressed, which is then paused when the button is pressed again

*/

function Meditation() {
  //   const waveBackground = {
  //     width: "100%",
  //     height: "100vh",
  //     backgroundImage: `url(${Wave})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover",
  //   };

  return (
    <section
      id="meditation-section"
      aria-label="meditation-section"
      // style={waveBackground}
    >
      <h2>Music Massage</h2>
      <h3>
        Welcome, bootcampers, to the practice of meditation, a valuable tool for
        managing the demands of your fast-paced learning environment.
      </h3>
      <MusicButton />
      <BreathingButton />
      <Transcript />
      {/* <img src={Wave} alt="wave" className="wave" /> */}
    </section>
  );
}

export default Meditation;
