import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RandomItem from "./components/RandomItem/index";
import { adjectives } from "./RandomItem/Adjective";
import { movie } from "./RandomItem/Movie";
import { places } from "./RandomItem/Place";
import { questions } from "./RandomItem/Question";
import Arrow from "./components/Arrow";

function App() {
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});

  function getRandomItem1(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomItem = array[randomNumber];
    if (randomItem === item1) {
      getRandomItem1(array);
    }
    setItem1(randomItem);
    console.log("item1");
    return randomItem;
  }

  function getRandomItem2(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomItem = array[randomNumber];
    setItem2(randomItem);
    console.log("item2");
    return randomItem;
  }

  function getRandomItem3(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomItem = array[randomNumber];
    // we want to check that the item is not the same as the previous item
    // if it is the same, we want to call the function again
    if (randomItem === item3) {
      getRandomItem3(array);
    }
    setItem3(randomItem);
    console.log("item3");
    return randomItem;
  }

  useEffect(() => {
    getRandomItem1(adjectives);
    getRandomItem2(movie);
    getRandomItem3(places);
  }, []);

  return (
    <div className="App">
      <header id="top-of-page" className="App-header">
        <Navbar />
        <Arrow />
      </header>
      <main>
        <div id="artist-studio" className="item-container">
          <RandomItem
            item={item1}
            getRandomItem={() => getRandomItem1(adjectives)}
          />
          <RandomItem
            item={item2}
            getRandomItem={() => getRandomItem2(movie)}
          />
          <RandomItem
            item={item3}
            getRandomItem={() => getRandomItem3(places)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
