import React from "react";

const DEFAULT_COLORS = ["red", "orange", "yellow", "green", "blue", "violet"];

function ColorBlock({ color }) {
  return (
    <div className="colorBlock" style={{ backgroundColor: color }}>
      <p>{color}</p>
    </div>
  );
}

// Do not forget to export your component once you have built it!
export default ColorBlock;
