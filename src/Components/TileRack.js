import React from "react";
import Tile from "./Tile";
import './Board.css'; 
function TileRack({ tiles }) {
    const tiless=['C','A','T','I','O','S']
  return (
    <div className="tile-rack">
            {tiless.map((tile, index) => (
            <Tile key={index} value={tile} />
            ))}
    </div>
  );
}
export default TileRack;