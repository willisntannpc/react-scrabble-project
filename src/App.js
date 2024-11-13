import React from 'react';
import Board from './Components/Board';  
// import Horizontal from './Components/Horizontal';
import Vertical from './Components/Vertical';
import Game from './Components/Game';
import Tile from './Components/Tile';

function App() {
  return (
    <div>
      <h1>Scrabble Board Game</h1>
      <h2>Introduction</h2>
      <p>
        Scrabble is a word game where players use lettered tiles to form words on a 15x15 board. 
        Each letter has a point value, and players earn points based on the words they create. 
        Some tiles on the board offer special bonuses, such as double or triple letter and word scores. 
        Players take turns forming words horizontally or vertically, and the game ends when all tiles are used or no more valid moves can be made. 
        The player with the highest score wins.
      </p>
      <div className="board-layout">
        <div className="special-tiles">
          <h2>Special Tiles</h2>
          <div className="double-letter">
            <h3>Double Letter</h3>
            <p>Double the value of the letter placed on this tile.</p>
            <p>e.g <Tile value="C" /> letter C which is worth 3 points will now score double i.e 3x2 <b>6 points</b></p>
          </div>
          <div className="triple-letter">
            <h3>Triple Letter</h3>
            <p>Triple the value of the letter placed on this tile.</p>
            <p>e.g <Tile value="K" /> letter K which is worth 5 points will now score triple i.e 5x3 <b>15 points</b></p>
          </div>
          <div className="double-word">
            <h3>Double Word</h3>
            <p>Double the value of the entire word placed on this tile.</p>
            <p>e.g the word "zoo" which was worth 12 points i.e 10+1+1 <div className="word-play"><Tile value="Z" /><Tile value="O" /><Tile value="O" /></div> is now worth 24 points (12X2)</p>
          </div>
          <div className="triple-word">
            <h3>Triple Word</h3>
            <p>Triple the value of the entire word placed on this tile.</p>
            <p>e.g the word "her" which was worth 6 points i.e 4+1+1 <div className="word-play"><Tile value="H" /><Tile value="E" /><Tile value="R" /></div> is now worth 18 points (6X3) </p>
          </div>
        </div>
        <h2>Board Layout</h2>
        <Board />
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <ol>
          <li><strong>Game Setup:</strong> Each player draws tiles to determine who goes first, and everyone starts with seven letter tiles on their rack.</li>
          <li><strong>Taking Turns:</strong> Players alternate turns, placing words on the board either horizontally or vertically. Each new word must connect to at least one existing word.</li>
          <ul>
            <li><Horizontal /></li>
            <li><Vertical /></li>
          </ul>
          <li><strong>Scoring:</strong> Players earn points based on the letters they use and any special bonuses on the board. The game ends when all tiles are used or no more valid moves can be made.</li>
          <li><strong>End of Game:</strong> The game ends when all tiles are drawn and one player uses all their tiles, or no valid moves remain.</li>
          <li><strong>Winning:</strong> The player with the highest score wins the game.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
