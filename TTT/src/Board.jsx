//Lifting State Up

import {useState} from 'react'
import './App.css'


function Square({ value, squreOnClick }) {
    return <button className="square" onClick={squreOnClick}>{value}</button>;
  }
  
  export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(2)); // <- its an array . thats why only passing the value in setSqure won;t work!
        function handleClick(){
            const nextSqures = squares.slice();
            nextSqures [0]= "X";
            setSquares(nextSqures); 
        }
    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} squreOnClick={handleClick} />
          <Square value={squares[1]} squreOnClick={handleClick} />
          <Square value={squares[2]} squreOnClick={handleClick} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} squreOnClick={handleClick} />
          <Square value={squares[4]} squreOnClick={handleClick} />
          <Square value={squares[5]} squreOnClick={handleClick} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} squreOnClick={handleClick} />
          <Square value={squares[7]} squreOnClick={handleClick} />
          <Square value={squares[8]} squreOnClick={handleClick} />
        </div>
      </>
    );
  }