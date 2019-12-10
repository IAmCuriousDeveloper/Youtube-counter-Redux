import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Counter from "./Counter";
import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store);
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({
          type: "INCREMENT"
        });
      }}
      onDecrement={() => {
        store.dispatch({
          type: "DECREMENT"
        });
      }}
      onReset={() => {
        store.dispatch({
          type: "RESET"
        });
      }}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
