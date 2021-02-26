import React from "react";

function Player(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default Player;
