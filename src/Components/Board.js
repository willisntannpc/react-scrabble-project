import React from 'react';
import specialTiles from './SpecialTiles';
import Tile from './Tile';
import './Board.css';

export const TW = () => (
    <div style={{ backgroundColor: "red", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        TW
    </div>
);

export const DW = () => (
    <div style={{ backgroundColor: "orange", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        DW
    </div>
);

export const TL = () => (
    <div style={{ backgroundColor: "blue", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        TL
    </div>
);

export const DL = () => (
    <div style={{ backgroundColor: "lightblue", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        DL
    </div>
);

// Modify getTileComponent to render either special or word tiles
const getTileComponent = (r, c, tilePositions) => {
    const position = `${r},${c}`;

    // Check if the position has an animated tile
    const tilePosition = tilePositions.find(pos => pos.row === r && pos.col === c);
    if (tilePosition) {
        return <Tile value={tilePosition.letter} />;
    }

    // Check if the position is a special tile
    if (specialTiles.TW.includes(position)) return <TW />;
    if (specialTiles.DW.includes(position)) return <DW />;
    if (specialTiles.TL.includes(position)) return <TL />;
    if (specialTiles.DL.includes(position)) return <DL />;

    return null;
};

const Board = ({ tilePositions = [] }) => {
    const boardSize = 15;

    return (
        <div id="board" style={{ display: 'grid', gridTemplateColumns: `repeat(${boardSize}, 40px)` }}>
            {[...Array(boardSize)].map((_, row) =>
                [...Array(boardSize)].map((_, col) => {
                    const tileComponent = getTileComponent(row + 1, col + 1, tilePositions);
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
