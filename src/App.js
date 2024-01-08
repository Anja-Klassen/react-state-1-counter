import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  //let count = 0;
  const [count, setCount] = useState(0);

  function handleClickDown() {
    //console.log("clicked");
    setCount(count - 1);
  }

  function handleClickUp() {
    //console.log("clicked");
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          //onClick={() => {
          //console.log("🤔");
          //}}
          onClick={handleClickDown}
        >
          -
        </button>
        <button
          type="button"
          //onClick={() => {
          //console.log("🤔");
          //}}
          onClick={handleClickUp}
        >
          +
        </button>
      </div>
    </div>
  );
}

// # React State: Counter

// In the `./src/App.js` you'll find the basic building blocks of a counter.

// The general idea here is that the counter should count up when the plus button is
//clicked, and count down when the minus button is clicked.

// Currently, the value `0` is hardcoded and doesn't respond to the buttons being
//clicked.

// ## Task

// Refactor the code so that it features React state and makes use of it. Declare
//a state variable and make sure to have the buttons update said state variable.

// You can use the following hints as a guideline:

// - `let` doesn't seem to be the appropriate way to declare a variable in this
//instance.
// - Is there a built-in React function you can use instead?
//   - Make sure to import said function.
// - At present, the `<button>`s' event handler is logging an emoji to the console.
//   - Clearly, the event handler should be handling a different type of functionality.
