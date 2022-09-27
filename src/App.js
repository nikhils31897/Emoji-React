import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var username = "Emoji";
  var cl = "blue";
  const emoticons = {
    "😁": "laughing",
    "😭": "crying",
    "😠": "angry",
    "😮": "surprise",
    "😬": "nervous"
  };
  const [Out, setOut] = useState("");
  const emoji = Object.keys(emoticons);
  function getMean(event) {
    var inp = event.target.value;
    if (emoticons[inp] === undefined)
      setOut("we don't have this value in our db");
    else setOut(emoticons[inp]);
  }
  function itemClick(item) {
    setOut(emoticons[item]);
  }
  return (
    <div className="App">
      <h3>
        Search your favorite <span style={{ color: cl }}>{username}</span> 😁
      </h3>
      <input onChange={getMean} style={{ padding: "1rem", width: "15rem" }} />
      <h3> emojis we know</h3>
      {emoji.map(function (item) {
        return (
          <span
            key={item}
            onClick={() => itemClick(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
      <h3>{Out}</h3>
    </div>
  );
}
