import React, { useState } from 'react';
import Board from './Board';
import TileRack from './TileRack';
import Animation from './Animation';
import ScoreTable from './ScoreTable';
import './in.css';

function Game() {
    const [scores, setScores] = useState({ Player1: 0, Player2: 0 });
    const [placedWords, setPlacedWords] = useState([]);
    const [rackTiles, setRackTiles] = useState(['D', 'A', 'R', 'E']);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationProps, setAnimationProps] = useState(null);

    const handleTileClick = (tile) => {
        if (!isAnimating && tile === 'DARE') {
            setIsAnimating(true);
            const start = { x: 0, y: 0 }; // Starting position on the rack
            const end = { x: 200, y: 200 }; // Destination on the board

            const onAnimationComplete = () => {
                setPlacedWords([...placedWords, { letters: tile, row: 7, col: 7 }]);
                setIsAnimating(false);
            };

            setAnimationProps({ word: tile, start, end, onComplete: onAnimationComplete });
        }
    };

    return (
        <div className="game">
            <ScoreTable scores={scores} />
            <Board placedWords={placedWords} />
            <TileRack rackTiles={rackTiles} onTileClick={handleTileClick} />
            {isAnimating && animationProps && (
                <Animation
                    word={animationProps.word}
                    start={animationProps.start}
                    end={animationProps.end}
                    onComplete={animationProps.onComplete}
                />
            )}
        </div>
    );
}

export default Game;
