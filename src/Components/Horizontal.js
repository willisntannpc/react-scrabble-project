import React, { useEffect, useState } from "react";
import TileRack from "./TileRack";
import Board from "./Board";

function Horizontal() {
  const [positions, setPositions] = useState([]);
  const [tiles, setTiles] = useState(['C', 'A', 'T', 'D', 'A', 'R', 'E']);
  const word = ['C', 'A', 'T'];
  const startRow = 8; // Define the row for horizontal placement
  const startColumn = 7; // Define the starting column
  const animationDelay = 500; // 500ms delay per letter for animation
  const loopDelay = 2000; // 2000ms delay before the word is animated again

  useEffect(() => {
    const animateWord = () => {
      word.forEach((letter, index) => {
        setTimeout(() => {
          setPositions((prevPositions) => [
            ...prevPositions,
            { letter, row: startRow, col: startColumn + index }
          ]);
          setTiles((prevTiles) => {
            const tileIndex = prevTiles.indexOf(letter);
            if (tileIndex !== -1) {
              const newTiles = [...prevTiles];
              newTiles.splice(tileIndex, 1);
              return newTiles;
            }
            return prevTiles;
          });
        }, index * animationDelay);
      });

      // Clear positions and restart animation after the loop delay
      setTimeout(() => {
        setPositions([]);
        setTiles(['C', 'A', 'T', 'D', 'A', 'R', 'E']); // Reset tiles
        animateWord();
      }, word.length * animationDelay + loopDelay);
    };

    animateWord();
  }, []);

  return (
    <div className="horizontal">
      <h2>Horizontal Play</h2>
      <Board tilePositions={positions} />
      <TileRack tiles={tiles} />
    </div>
  );
}

export default Horizontal;
