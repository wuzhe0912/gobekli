import React from "react";
import "./styles/main.scss";

function App() {
  const handle = (e) => {
    e.preventDefault();
    let date = new Date().toLocaleDateString();
    console.log(date);
  };

  return (
    <div className="App">
      <form action="">
        <input type="text" />
        <button onClick={handle}>Submit</button>
      </form>
      <p></p>
    </div>
  );
}

export default App;
