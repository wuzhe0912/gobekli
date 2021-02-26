import React from "react";
import "./styles/main.scss";

function App() {
  const list = [{ text: "aaa" }, { text: "bbb" }, { text: "ccc" }];

  return (
    <div className="App">
      <span>{5 + 15}</span>
      {list.map((node) => {
        return <li key={node.text}>{node.text}</li>;
      })}
    </div>
  );
}

export default App;
