import React from "react";
import "./styles/main.scss";

function App() {
  const handle = (msg) => {
    console.log(msg);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          handle("test");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
