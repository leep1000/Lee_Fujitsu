// Wave.js
import React from "react";
import Sketch from "react-p5";

const Wave = () => {
  let t = 0;
  const increment = 0.01;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.translate(0, p5.height / 2);
    p5.stroke(255);
    p5.noFill();

    p5.beginShape();
    for (let x = 0; x < p5.width; x++) {
      const y = p5.map(p5.noise(t), 0, 1, -200, 200);
      p5.vertex(x, y);
      t += increment;
    }
    p5.endShape();

    p5.noStroke();
    p5.fill(255, 20);
    p5.beginShape();
    for (let x = 0; x < p5.width; x++) {
      const y = p5.map(p5.noise(t), 0, 1, -200, 200);
      p5.vertex(x, y);
      t += increment;
    }
    p5.vertex(p5.width, p5.height / 2);
    p5.vertex(0, p5.height / 2);
    p5.endShape(p5.CLOSE);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Wave;
