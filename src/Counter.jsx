import React from "react";
import "./counterstyle.scss";
export default function Counter(props) {
  const { value, onIncrement, onDecrement, onReset } = props;
  return (
    <div id="counter-app">
      <div id="display-container" className="container">
        <p id="display">{value}</p>
      </div>

      <div id="buttons-container" className="container">
        <button id="increment-button" className="button" onClick={onIncrement}>
          <i> + </i>
        </button>
        <button id="decrement-button" className="button" onClick={onDecrement}>
          <i>-</i>
        </button>
        <button id="reset-button" className="button" onClick={onReset}>
          <i>{"()"}</i>
        </button>
        <div>
          <p>lets learn Redux</p>
        </div>
      </div>
    </div>
  );
}
