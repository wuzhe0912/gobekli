import React from "react";
import Player from "./Player";
import "./styles/main.scss";

function App() {
  const list = [
    { name: "aaa", age: 11, desc: "lorem aaa" },
    { name: "bbb", age: 22, desc: "lorem bbb" },
    { name: "ccc", age: 33, desc: "lorem ccc" },
  ];

  return (
    <div className="App">
      <span>{5 + 15}</span>
      {list.map((node) => {
        return (
          <Player
            key={node.name}
            name={node.name}
            age={node.age}
            desc={node.desc}
          />
        );
      })}
    </div>
  );
}

export default App;
