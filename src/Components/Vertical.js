import React, { useEffect, useState, useRef } from "react";
import TileRack from "./TileRack";
import Board from "./Board";

function Vertical() {
  const [positions, setPositions] = useState([]);
  const [tiles, setTiles] = useState(['D', 'A','W', 'U', 'I', 'R', 'E']);
  const word = ['D', 'A', 'R', 'E'];
  const startColumn = 8; // Column for placing the word
  const startRow = 7; // Starting row
  const animationDelay = 500; // 500ms delay per letter for animation
  const loopDelay = 2000; // 2000ms delay before the word is animated again
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const animateWord = () => {
      word.forEach((letter, index) => {
        const timeout = setTimeout(() => {
          setPositions((prevPositions) => [
            ...prevPositions,
            { letter, row: startRow + index, col: startColumn }
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
        timeoutsRef.current.push(timeout);
      });

      // Clear positions and restart animation after the loop delay
      const loopTimeout = setTimeout(() => {
        setPositions([]);
        setTiles(['D', 'A','W', 'U', 'I', 'R', 'E']); // Reset tiles
        animateWord();
      }, word.length * animationDelay + loopDelay);
      timeoutsRef.current.push(loopTimeout);
    };

    animateWord();

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  return (
    <div className="vertical">
      <h2>Vertical Play</h2>
      <p>The word <b>DARE</b> is animated vertically</p>
      <Board tilePositions={positions} />
      <TileRack tiles={tiles} />
    </div>
  );
}

export default Vertical;
