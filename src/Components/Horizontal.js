import React from "react";
import TileRack from "./TileRack";
import Board from "./Board";
function Horizontal() {
  return (
    <div className="horizontal">
      <h2>Horizontal Play</h2>
      <Board />
      <TileRack/>
    </div>
  );
}
export default Horizontal;