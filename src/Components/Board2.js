import React from 'react';
import specialTiles from './SpecialTiles';
import './Board.css'; 


const getTileStyle = (r, c) => {
    const position = `${r},${c}`;
    if (specialTiles.TW.includes(position)) return { backgroundColor: "red", label: "TW" };
    if (specialTiles.DW.includes(position)) return { backgroundColor: "orange", label: "DW" };
    if (specialTiles.TL.includes(position)) return { backgroundColor: "blue", label: "TL" };
    if (specialTiles.DL.includes(position)) return { backgroundColor: "lightblue", label: "DL" };
    return { backgroundColor: "white", label: "" };
};

const Board2 = () => {
    const boardSize = 15;

    return (
        <div id="board" style={{ display: 'grid', gridTemplateColumns: `repeat(${boardSize}, 40px)` }}>
            {[...Array(boardSize)].map((_, row) =>
                [...Array(boardSize)].map((_, col) => {
                    const { backgroundColor, label } = getTileStyle(row + 1, col + 1);
                    return (
                        <div
                            key={`${row}-${col}`}
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor,
                                border: '1px solid lightgray'
                            }}
                            id={`${row + 1},${col + 1}`}
                        >
                            {label || (row === 7 && col === 7 ? '★' : '')}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Board2;
