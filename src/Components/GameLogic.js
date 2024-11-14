import React, { useState } from 'react';
import ScoreTable from './ScoreTable';
import Board from './Board';
import TileRack from './TileRack';

// Define letter values for Scrabble scoring
const letterValues = {
  E: 1, A: 1, I: 1, O: 1, N: 1, R: 1, T: 1, L: 1, S: 1, U: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10,
};

// Special tiles on the Scrabble board
const specialTiles = {
  TW: ["1,1", "1,8", "1,15", "8,1", "8,15", "15,1", "15,8", "15,15"],
  DW: ["2,2", "2,14", "3,3", "3,13", "4,4", "4,12", "5,5", "5,11", "8,8", "11,5", "11,11", "12,4", "12,12", "13,3", "13,13", "14,2", "14,14"],
  TL: ["2,6", "2,10", "6,2", "6,6", "6,10", "6,14", "10,2", "10,6", "10,10", "10,14", "14,6", "14,10"],
  DL: ["1,4", "1,12", "3,7", "3,9", "4,1", "4,8", "4,15", "7,3", "7,7", "7,9", "7,13", "8,4", "8,12", "9,3", "9,7", "9,9", "9,13", "12,1", "12,8", "12,15", "13,7", "13,9", "15,4", "15,12"]
};

// Get special tile type at a given position
const getSpecialTileType = (x, y) => {
  const position = `${x},${y}`;
  if (specialTiles.TW.includes(position)) return 'TW';
  if (specialTiles.DW.includes(position)) return 'DW';
  if (specialTiles.TL.includes(position)) return 'TL';
  if (specialTiles.DL.includes(position)) return 'DL';
  return null;
};

function GameLogic() {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [playerScores, setPlayerScores] = useState({ player1: 0, player2: 0 });
  const [playedWords, setPlayedWords] = useState([]);
  const [tiles, setTiles] = useState(['C', 'A', 'T', 'D', 'A', 'R', 'E']);
  const [boardState, setBoardState] = useState([]);

  const calculateWordScore = (word, startX, startY, direction) => {
    let wordMultiplier = 1;
    let wordScore = 0;

    word.split('').forEach((letter, i) => {
      const x = direction === 'horizontal' ? startX + i : startX;
      const y = direction === 'vertical' ? startY + i : startY;
      const squareType = getSpecialTileType(x + 1, y + 1);

      let baseScore = letterValues[letter.toUpperCase()] || 0;

      // Apply square multipliers based on squareType
      if (squareType === 'DL') baseScore *= 2;
      if (squareType === 'TL') baseScore *= 3;
      if (squareType === 'DW') wordMultiplier *= 2;
      if (squareType === 'TW') wordMultiplier *= 3;

      wordScore += baseScore;
    });

    return wordScore * wordMultiplier;
  };

  const animateWord = (word, startX, startY, direction) => {
    word.split('').forEach((letter, i) => {
      setTimeout(() => {
        const x = direction === 'horizontal' ? startX + i : startX;
        const y = direction === 'vertical' ? startY + i : startY;

        setBoardState((prevBoardState) => [
          ...prevBoardState,
          { letter, x, y }
        ]);
      }, i * 500);
    });
  };

  const handleWordCompletion = (word, startX, startY, direction) => {
    const score = calculateWordScore(word, startX, startY, direction);
    const bonus = word.length === 7 ? 50 : 0;
    const totalScore = score + bonus;

    setPlayedWords((prevWords) => [...prevWords, { word, startX, startY, direction, score: totalScore }]);
    animateWord(word, startX, startY, direction);

    updateScore(totalScore);
    switchTurn();

    setTiles((prevTiles) => {
      const newTiles = [...prevTiles];
      word.split('').forEach((letter) => {
        const tileIndex = newTiles.indexOf(letter);
        if (tileIndex > -1) {
          newTiles.splice(tileIndex, 1);
        }
      });
      return newTiles;
    });
  };

  const updateScore = (points) => {
    setPlayerScores((prevScores) => {
      const newScores = { ...prevScores };
      if (playerTurn === 1) {
        newScores.player1 += points;
      } else {
        newScores.player2 += points;
      }
      return newScores;
    });
  };

  const switchTurn = () => {
    setPlayerTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
  };

  return (
    <div className="game-logic">
      <ScoreTable playerTurn={playerTurn} playerScores={playerScores} />
      <Board playedWords={playedWords} boardState={boardState} />
      <TileRack tiles={tiles} onWordSubmit={handleWordCompletion} />

      <button onClick={() => handleWordCompletion("CAT", 7, 7, "horizontal")}>
        Play "CAT"
      </button>
      <button onClick={() => handleWordCompletion("DARE", 7, 8, "vertical")}>
        Play "DARE"
      </button>
    </div>
  );
}

export default GameLogic;
