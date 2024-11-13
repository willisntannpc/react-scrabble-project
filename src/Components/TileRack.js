import React from "react";
import Tile from "./Tile";
import './Board.css'; 
function TileRack({ tiles }) {
    const tiless=['C','A','T','D','A','R','E'];
  return (
    <div className="tile-rack">
            {tiless.map((tile, index) => (
            <Tile key={index} value={tile} />
            ))}
    </div>
  );
}
export default TileRack;