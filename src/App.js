import React from 'react';
import Board from './Components/Board';  
import Horizontal from './Components/Horizontal';
import Vertical from './Components/Vertical';

function App() {
  return (
    <div>
    
        <h1>Scrabble Board Game</h1>
        <h2>Introduction</h2>
        <p>Scrabble is a word game where players use lettered tiles to form words on a 15x15 board. Each letter has a point value, and players earn points based on the words they create. Some tiles on the board offer special bonuses, such as double or triple letter and word scores. Players take turns forming words horizontally or vertically, and the game ends when all tiles are used or no more valid moves can be made. The player with the highest score wins.</p>
       <h2>Board Layout</h2>
        <Board />
        <div class ="instructions">
        <h2>Instructions</h2>
        <ol>
        <li><strong>Game Setup:</strong> Each player draws tiles to determine who goes first, and everyone starts with seven letter tiles on their rack.</li>
        <li><strong>Taking Turns:</strong> Players alternate turns, placing words on the board either horizontally or vertically. Each new word must connect to at least one existing word.</li>
        <ul>
        <li><Horizontal/></li>
        <li><Vertical /></li>
        <li><strong>Scoring:</strong> Players earn points based on the letters they use and any special bonuses on the board. The game ends when all tiles are used or no more valid moves can be made.</li>
        </ul>
        <li><strong>End of Game:</strong> The game ends when all tiles are drawn and one player uses all their tiles, or no valid moves remain.</li>
        <li><strong>Winning:</strong> The player with the highest score wins the game.</li>
        </ol>
        </div>
    </div>
  );
}

export default App;
