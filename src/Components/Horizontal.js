import React from "react";
import TileRack from "./TileRack";
import Board2 from "./Board2";
import AnimateWord from "./AnimateCat";

function Horizontal() {
  return (
    <div className="horizontal">
      <h1>Horizontal Play</h1>
      <Board2 />
      <TileRack/>
      <AnimateWord/>
    </div>
  );
}
export default Horizontal;