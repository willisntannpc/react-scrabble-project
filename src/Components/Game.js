import React from 'react';
import Horizontal from './Horizontal';
import AnimateWord from './AnimateCat';

const Game = () => {
    const letters = { 'A': 1, 'C': 3, 'T': 1 };
    const predefinedLetters = ['C', 'A', 'T'];
    const targetPositions = [
        { row: 8, col: 8 },
        { row: 8, col: 9 },
        { row: 8, col: 10 }
    ];

    return (
        <div>
            <Horizontal />
            <AnimateWord
                predefinedLetters={predefinedLetters}
                targetPositions={targetPositions}
                letters={letters}
            />
        </div>
    );
};

export default Game;
