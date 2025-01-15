//Lifting State Up

import {useState} from 'react';

//global variable for alternate X and O's .


function Square({ value, squreOnClick }) {
    return <button className="square" onClick={squreOnClick}>{value}</button>;
  }
  
  export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null)); // <- its an array . thats why only passing the value in setSqure won;t work!
    const [xIsNext,setIsNext] = useState(true);
    // function to handle click   
    function handleClick(i){

      
      const nextSqures = squares.slice();    
      if(squares[i]){
        return;
      }
      if(xIsNext){
  
            nextSqures [i]= "X";
          }
          else{
            nextSqures [i]= "O";
          }
          setSquares(nextSqures);   
          setIsNext(!xIsNext);
        }
    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} squreOnClick={()=> handleClick(0)} />
          <Square value={squares[1]} squreOnClick={()=> handleClick(1)} />
          <Square value={squares[2]} squreOnClick={()=> handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} squreOnClick={()=> handleClick(3)} />
          <Square value={squares[4]} squreOnClick={()=> handleClick(4)} />
          <Square value={squares[5]} squreOnClick={()=> handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} squreOnClick={()=> handleClick(6)} />
          <Square value={squares[7]} squreOnClick={()=> handleClick(7)} />
          <Square value={squares[8]} squreOnClick={()=> handleClick(8)} />
        </div>
      </>
    );
  }