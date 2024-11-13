import React from 'react';
import Board from './Components/Board';
import ScoreInfo from './Components/ScoreInfo';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Scrabble Game</h1>
            {/* Add the ScoreInfo component here */}
            <ScoreInfo />
            <Board />
        </div>
    );
}

export default App;
