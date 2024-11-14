import React from 'react';
import Tile from './Components/Tile';
import './Header.css';
function Header() {
  return (
    <div className="title">
    <div className="scrabble">
      <Tile value="S" /> <Tile value="C" /> <Tile value="R" /> <Tile value="A" /> <Tile value="B" /> <Tile value="B" /> <Tile value="L" /> <Tile value="E" />
    </div>
  </div>
  );
}
export default Header;