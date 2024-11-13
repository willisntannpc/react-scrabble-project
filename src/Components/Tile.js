import React from 'react';
import './Tile.css';

    const  Tile = ({ letter, animate }) => {
        return (
            <div className={`tile ${animate ? 'animate' : ''}`}>
              {letter}
            </div>
          );
        };

export default Tile;