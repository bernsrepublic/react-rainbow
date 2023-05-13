import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";

function App() {
  const DEFAULT_COLORS = ["red", "orange", "yellow", "green", "blue", "violet"];
  const [color, setColors] = useState(DEFAULT_COLORS);
  const onAddColor = (newColor) => setColors([...color, newColor]);
  const colorMap = color.map((color, index) => (
    <ColorBlock key={index} color={color} />
  ));
  return (
    <div className="App">
      {colorMap}
      <ColorForm onAddColor={onAddColor} />
    </div>
  );
}

export default App;
