import "./App.css";
import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RandomItem from "./components/RandomItem/index";
// import adjectives from "./"

function App() {
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});

  function getRandomItem1(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomItem = array[randomNumber];
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
    setItem3(randomItem);
    console.log("item3");
    return randomItem;
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <div className="item-container">
          <RandomItem item={item1} getRandomItem={() => getRandomItem1/*(adjectives)*/} />
          <RandomItem item={item2} getRandomItem={() => getRandomItem2} />
          <RandomItem item={item3} getRandomItem={() => getRandomItem3} />
        </div>
      </main>
    </div>
  );
}

export default App;
