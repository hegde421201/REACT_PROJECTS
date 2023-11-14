import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add color name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
        required
        value={colorValue}
      ></input>
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Flip Text Color
      </button>
    </form>
  );
};

export default Input;
