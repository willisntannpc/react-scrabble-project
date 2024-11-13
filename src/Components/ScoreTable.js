import React, { useState } from 'react';

function ScoreTable({ playerTurn, playerScores }) {
  // Destructures player scores passed as props to display them in the score table.
  const { player1, player2 } = playerScores;

  return (
    <div className="score-table">
      <h2>Score Table</h2>
      <div>
        <p>Player 1 Score: {player1}</p>
        <p>Player 2 Score: {player2}</p>
        <p>Current Turn: Player {playerTurn}</p>
      </div>
    </div>
  );
}

export default ScoreTable;
