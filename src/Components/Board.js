import React from 'react';
import specialTiles from './SpecialTiles';
import './Board.css';

const TW = () => (
    <div style={{ backgroundColor: "red", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        TW
    </div>
);

const DW = () => (
    <div style={{ backgroundColor: "orange", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        DW
    </div>
);

const TL = () => (
    <div style={{ backgroundColor: "blue", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        TL
    </div>
);

const DL = () => (
    <div style={{ backgroundColor: "lightblue", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        DL
    </div>
);

const getTileComponent = (r, c) => {
    const position = `${r},${c}`;
    if (specialTiles.TW.includes(position)) return <TW />;
    if (specialTiles.DW.includes(position)) return <DW />;
    if (specialTiles.TL.includes(position)) return <TL />;
    if (specialTiles.DL.includes(position)) return <DL />;
    return null;
};

const Board = () => {
    const boardSize = 15;

    return (
        <div id="board" style={{ display: 'grid', gridTemplateColumns: `repeat(${boardSize}, 40px)` }}>
            {[...Array(boardSize)].map((_, row) =>
                [...Array(boardSize)].map((_, col) => {
                    const tileComponent = getTileComponent(row + 1, col + 1);
                    return (
                        <div
                            key={`${row}-${col}`}
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: tileComponent ? 'transparent' : 'white',
                                border: '1px solid lightgray'
                            }}
                            id={`${row + 1},${col + 1}`}
                        >
                            {tileComponent || (row === 7 && col === 7 ? '★' : '')}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Board;
