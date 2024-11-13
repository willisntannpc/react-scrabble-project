import React, { useEffect, useState } from 'react';
import './Board.css';
import Tile from './Tile';


const Board = () => {
    const boardSize = 15;
    const board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));

    const [animatedWords, setAnimatedWords] = useState([]);

    useEffect(() => {
        // Animate the words 'dare' and 'cat'
        setAnimatedWords(['dare', 'cat']);
      }, []);

    return (
      <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => {
            const animatedWord = animatedWords.find(
              aw => aw.row === rowIndex && aw.col <= colIndex && aw.col + aw.word.length > colIndex
            );

            if (animatedWord) {
              const letter = animatedWord.word[colIndex - animatedWord.col];
              return <Tile key={colIndex} letter={letter} animate={true} />;
            }
            
            return <Tile key={colIndex} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
