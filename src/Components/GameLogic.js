import React, { useState, useEffect } from 'react';
import ScoreTable from './ScoreTable';

const letterValues = {
  E: 1, A: 1, I: 1, O: 1, N: 1, R: 1, T: 1, L: 1, S: 1, U: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10,
};

// Define special squares and their multipliers
const SPECIAL_SQUARES = {
  DL: 'DL', // Double Letter
  TL: 'TL', // Triple Letter
  DW: 'DW', // Double Word
  TW: 'TW', // Triple Word
};

function GameLogic() {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [playerScores, setPlayerScores] = useState({ player1: 0, player2: 0 });
  const [word, setWord] = useState('');
  const [specialSquares, setSpecialSquares] = useState([]); // Array to hold special square types for each letter

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWordCompletion(word, specialSquares);
    setWord(''); // Reset the word and special squares after submission
    setSpecialSquares([]);
  };

  
  const calculateWordScore = (word, specialSquares) => {
    let letterMultiplier = 1; // Multiplier for individual letters
    let wordMultiplier = 1; // Multiplier for the entire word
    let wordScore = 0;

    word.split('').forEach((letter, index) => {
      let baseScore = letterValues[letter.toUpperCase()] || 0;
      const square = specialSquares[index]; // Get square type at the letter position

      // Apply square multipliers
      if (square === SPECIAL_SQUARES.DL) baseScore *= 2;
      if (square === SPECIAL_SQUARES.TL) baseScore *= 3;
      if (square === SPECIAL_SQUARES.DW) wordMultiplier *= 2;
      if (square === SPECIAL_SQUARES.TW) wordMultiplier *= 3;

      wordScore += baseScore;
    });

    // Apply word multiplier to total word score
    return wordScore * wordMultiplier;
  };

  // Check if the player used all 7 letters for a 50-point bonus
  const handleWordCompletion = (word, specialSquares) => {
    const score = calculateWordScore(word, specialSquares);
    const bonus = word.length === 7 ? 50 : 0; // Bingo bonus if all tiles used
    const totalScore = score + bonus;
    updateScore(totalScore);
    switchTurn();
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
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          placeholder="Enter word"
          onChange={(e) => setWord(e.target.value)}
        />
        <input
          type="text"
          value={specialSquares.join(',')}
          placeholder="Special squares (e.g., DL, TL)"
          onChange={(e) => setSpecialSquares(e.target.value.split(','))}
        />
        <button type="submit">Submit Word</button>
      </form>
    </div>
  );
}

export default GameLogic;
