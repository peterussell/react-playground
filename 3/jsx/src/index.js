// 1) Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  let message = "Bye there!";

  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  const time = new Date().toLocaleTimeString();

  return (
    <>
      <h1>{message}</h1>
      <p>The time is {time}</p>
    </>
  );
}

// 5) Show that component on the screen
root.render(<App />);