import React from "react";
import { useState, useEffect } from "react";

let octave = 0,
  handleMouseDown = undefined,
  handleMouseUp = undefined;

export default function KeyboardListener(props) {
  octave = props.octave;
  handleMouseDown = props.handleMouseDown;
  handleMouseUp = props.handleMouseDown;
  const press = useKeyPress();
  return press;
}

// Hook
function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);
  function downHandler({ key }) {
    console.log(key);
    if (key === "a") {
      handleMouseDown("C", octave);
      setKeyPressed(true);
    } else if (key === "w") {
      handleMouseDown("C#", octave);
      setKeyPressed(true);
    } else if (key === "s") {
      handleMouseDown("D", octave);
      setKeyPressed(true);
    } else if (key === "e") {
      handleMouseDown("D#", octave);
      setKeyPressed(true);
    } else if (key === "d") {
      handleMouseDown("E", octave);
      setKeyPressed(true);
    } else if (key === "f") {
      handleMouseDown("F", octave);
      setKeyPressed(true);
    } else if (key === "t") {
      handleMouseDown("F#", octave);
      setKeyPressed(true);
    } else if (key === "g") {
      handleMouseDown("G", octave);
      setKeyPressed(true);
    } else if (key === "y") {
      handleMouseDown("G#", octave);
      setKeyPressed(true);
    } else if (key === "h") {
      handleMouseDown("A", octave);
      setKeyPressed(true);
    } else if (key === "y") {
      handleMouseDown("A#", octave);
      setKeyPressed(true);
    } else if (key === "j") {
      handleMouseDown("B", octave);
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  function upHandler({ key }) {
    console.log(key);
    if (key === "a") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "w") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "s") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "e") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "d") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "f") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "t") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "g") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "y") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "h") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "y") {
      handleMouseUp();
      setKeyPressed(false);
    } else if (key === "j") {
      handleMouseUp();
      setKeyPressed(false);
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}
