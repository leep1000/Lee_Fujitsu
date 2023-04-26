import { useState, useEffect } from "react";
import React from "react";
import MusicButton from "./MusicButton";
import BreathingButton from "./BreathingButton";
/*
I want to make component that will be a section of the webpage dedicated to a meditating activity
I want to have a button that will generate a random meditation activity
The generated content should have an audio file that the user can listen to, pause and play
The audio file will have a scrubber that the user can use to move to different parts of the audio file
There should also be a button that plays relaxing music when pressed, which is then paused when the button is pressed again

*/

function Meditation() {
  return (
    <section id="meditation-section" aria-label="meditation-section">
      <h2>Music Massage</h2>
      <h3>
        Welcome, bootcampers, to the practice of meditation, a valuable tool for
        managing the demands of your fast-paced learning environment.
      </h3>
      <MusicButton />
      <BreathingButton />
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
    </section>
  );
}

export default Meditation;
