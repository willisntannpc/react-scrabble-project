import React, { useEffect, useState, useRef } from "react";
import TileRack from "./TileRack";
import Board from "./Board";

function Horizontal() {
  const [positions, setPositions] = useState([]);
  const [tiles, setTiles] = useState(['C', 'I', 'T', 'D', 'A', 'R', 'E']);
  const word = ['C', 'A', 'T'];
  const startRow = 8; // Define the row for horizontal placement
  const startColumn = 7; // Define the starting column
  const animationDelay = 500; // 500ms delay per letter for animation
  const loopDelay = 2000; // 2000ms delay before the word is animated again
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const animateWord = () => {
      word.forEach((letter, index) => {
        const timeout = setTimeout(() => {
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
        timeoutsRef.current.push(timeout);
      });

      // Clear positions and restart animation after the loop delay
      const loopTimeout = setTimeout(() => {
        setPositions([]);
        setTiles(['C', 'I', 'T', 'D', 'A', 'R', 'E']); // Reset tiles
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
    <div className="horizontal">
      <h2>Horizontal Play</h2>
      <p>The word <b>CAT</b> is animated horizontally</p>
      <Board tilePositions={positions} />
      <TileRack tiles={tiles} />
    </div>
  );
}

export default Horizontal;
