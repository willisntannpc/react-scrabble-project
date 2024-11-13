import React from 'react';
import Board from './Components/Board';  
import Horizontal from './Components/Horizontal';
import TileRack from './Components/TileRack';
import GameLogic from './Components/GameLogic';

function App() {
  return (
    <div>
    
        <h1>Scrabble Board Game</h1>
        <h2>Introduction</h2>
        <p>Scrabble is a word game where players use lettered tiles to form words on a 15x15 board. Each letter has a point value, and players earn points based on the words they create. Some tiles on the board offer special bonuses, such as double or triple letter and word scores. Players take turns forming words horizontally or vertically, and the game ends when all tiles are used or no more valid moves can be made. The player with the highest score wins.</p>
       <h2>Board Layout</h2>
        <Board />
        <GameLogic />
        <TileRack />
     <Horizontal/>
     
    </div>
  );
}

export default App;
