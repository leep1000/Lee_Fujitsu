import "./App.css";
import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RandomItem from "./components/RandomItem/index";

function App() {
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});

  function getRandomItem(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomItem = array[randomNumber];
    setItem1(randomItem);
    console.log("item1");
    setItem2(randomItem);
    console.log("item2");
    setItem3(randomItem);
    console.log("Item3");
    return randomItem;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <div className="item-container">
          <RandomItem item={item1} getRandomItem={() => getRandomItem} />
          <RandomItem item={item2} getRandomItem={() => getRandomItem} />
          <RandomItem item={item3} getRandomItem={() => getRandomItem} />
        </div>
      </main>
    </div>
  );
}

export default App;
