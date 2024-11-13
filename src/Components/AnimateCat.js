import React, { useEffect, useRef, useState } from 'react';

const AnimateWord = ({ predefinedLetters = [], targetPositions = [], letters = {} }) => {
    const [step, setStep] = useState(0);
    const rackTiles = useRef([]);

    useEffect(() => {
        if (step < predefinedLetters.length) {
            const tile = rackTiles.current[step];
            const boardTile = document.getElementById(`${targetPositions[step]?.row},${targetPositions[step]?.col}`);

            if (tile && boardTile) {
                const tileRect = tile.getBoundingClientRect();
                const boardTileRect = boardTile.getBoundingClientRect();
                const deltaX = boardTileRect.left - tileRect.left;
                const deltaY = boardTileRect.top - tileRect.top;

                tile.style.transition = 'transform 1s';
                tile.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

                setTimeout(() => {
                    tile.style.transition = '';
                    tile.style.transform = '';
                    boardTile.appendChild(tile);

                    setStep(prevStep => prevStep + 1);
                }, 1000);
            }
        } else {
            setTimeout(() => {
                predefinedLetters.forEach((_, index) => {
                    const tile = rackTiles.current[index];
                    const rack = document.getElementById('player1');
                    rack.appendChild(tile);
                });
                setStep(0); 
            }, 2000);
        }
    }, [step, predefinedLetters, targetPositions]);

    return (
        <div id="player1" style={{ display: 'flex', gap: '5px' }}>
            {predefinedLetters.map((letter, i) => (
                <div
                    key={i}
                    ref={el => (rackTiles.current[i] = el)}
                    style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid lightgray',
                        backgroundColor: 'beige',
                        position: 'relative'
                    }}
                >
                    <span style={{ fontSize: '20px', color: 'black' }}>{letter}</span>
                    <span style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        fontSize: '12px',
                        color: 'black'
                    }}>
                        {letters[letter]}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default AnimateWord;
