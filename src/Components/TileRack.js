import React from "react";
import Tile from "./Tile";
import './Board.css'; 

function TileRack({ tiles = ['V', 'O', 'P', 'D', 'A', 'R', 'K'] }) {
  return (
    <div className="tile-rack">
      {tiles.map((tile, index) => (
        <Tile key={index} value={tile} />
      ))}
    </div>
  );
}

export default TileRack;
