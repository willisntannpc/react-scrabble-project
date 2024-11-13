function ScoreTable({ playerTurn, playerScores, playedWords = [] }) { // Default playedWords to empty array
  const { player1, player2 } = playerScores;

  return (
    <div className="score-table">
      <h2>Score Table</h2>
      <div>
        <p>Player 1 Score: {player1}</p>
        <p>Player 2 Score: {player2}</p>
        <p>Current Turn: Player {playerTurn}</p>
      </div>
      <h3>Played Words:</h3>
      <ul>
        {playedWords.map((entry, index) => (
          <li key={index}>
            Word: {entry.word} | Score: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ScoreTable;