import React from 'react';
import Board from './Components/Board';  
import Horizontal from './Components/Horizontal';
import Vertical from './Components/Vertical';
import Tile from './Components/Tile';
import { TW, DW, TL, DL } from './Components/Board'; // Import special tiles
import './App.css';
import Header from './Header';
import TileRack from './Components/TileRack';

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <h1>Introduction</h1>
        <p className="intro">Scrabble is a word game where players use lettered tiles to form words on a 15x15 board. Each letter has a point value, and players earn points based on the words they create. Some tiles on the board offer special bonuses, such as double or triple letter and word scores. Players take turns forming words horizontally or vertically, and the game ends when all tiles are used or no more valid moves can be made. The player with the highest score wins.</p>
        
        <h1>Goal</h1>
        <p>The goal of Scrabble is to score as many points as possible by placing letter tiles to create words onto the game board.</p>
        <div className="instructions">
          <h1>Instructions</h1>
          <ol>
            <li><strong>Game Setup:</strong> Each player draws tiles to determine who goes first, and everyone starts with seven letter tiles on their rack e.g.</li>
            <TileRack/>
            <li><strong>Taking Turns:</strong> Players alternate turns, placing words on the board either horizontally or vertically. Each new word must connect to at least one existing word and should be 2 or more letters long.</li>
            <ul className="plays">
              <li className='horizontal'><Horizontal /></li>
              <li className='vertical'><Vertical /></li>
            </ul>
            <p><b>Diagonal plays or words that read right-to-left or bottom-to-top are not acceptable. </b><br/>
            All letters played in one turn must lie on a line and form a continuous word and at least one tile played must be adjacent to a tile previously on the board.</p>
            <li><strong>Tiles & Scoring:</strong> Players earn points based on the letters they use and any special bonuses on the board.Each letter tile has a point value. Values range from 0 point for a blank tile to 10 points for the letters.</li>
            <div className="container">
          <div className="special-tiles">
            <h1>Special Scores</h1>
            <p>These are special spaces on the board where if tiles are placed the score of the word/letter is increased</p>
            <div className="double-letter">
              <div className='scoring'>
                <div className='special-score'><DL /></div>
                <h3>Double Letter</h3>
              </div>
              <p>Double the value of the letter placed on this tile.</p>
              <p>
  e.g.  letter <span style={{ display: 'inline-flex' }}><Tile value="C" /></span> , worth 3 points, will now score double, i.e., 3x2 = <b>6 points</b>
</p>
            </div>
            <div className="triple-letter">
              <div className='scoring'>
                <div className='special-score'><TL /></div>
                <h3>Triple Letter</h3>
              </div>
              <p>Triple the value of the letter placed on this tile.</p>
              <p>e.g. letter <span style={{ display: 'inline-flex' }}> <Tile value="K" /> </span>, worth 5 points, will now score triple i.e. 5x3 = <b>15 points</b></p>
            </div>
          
           
            <div className="double-word">
              <div className='scoring'>
                <div className='special-score'>
                  <DW /> 
                </div>
                <h3>Double Word</h3>
              </div>
              <p>Double the value of the entire word placed on this tile.</p>
              <p>e.g.,the word <span style={{ display: 'inline-flex' }}><Tile value="Z"/><Tile value="O"/><Tile value="O"/></span> initially worth 12 points (10+1+1), is now worth <b>24 points</b> (12x2).</p>
            </div>
            <div className="triple-word">
              <div className='scoring'>
                <div className='special-score'>
                  <TW /> 
                </div>
                <h3>Triple Word</h3>
              </div>
              <p>Triple the value of the entire word placed on this tile.</p>
              <p>e.g.,the word <span style={{ display: 'inline-flex' }}><Tile value="H"/><Tile value="E"/><Tile value="R"/></span> initially worth 6 points (4+1+1), is now worth <b>18 points</b> (6x3).</p>
            </div>
          </div>

          <div className="board-layout">
            <h1>Board Layout</h1>
            <Board />
          </div>
        </div>
            <li><strong>End of Game:</strong> The game ends when all tiles are drawn and one player uses all their tiles, or no valid moves remain.</li>
            <li><strong>Winning:</strong> The player with the highest score wins the game.</li>
          </ol>
        </div>

      
    
        </div>
        </div>
  );
}

export default App;
