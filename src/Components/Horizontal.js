import React from "react";
import TileRack from "./TileRack";
import Board from "./Board";
function Horizontal() {
  return (
    <div className="horizontal">
      <h1>Horizontal Play</h1>
      <Board />
      <TileRack/>
    </div>
  );
}
export default Horizontal;