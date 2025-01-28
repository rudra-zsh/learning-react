//Lifting State Up
import './Game.css';
import {useState} from 'react';

//global variable for alternate X and O's .


function Square({ value, squreOnClick }) {
    return <button className="square" onClick={squreOnClick}>{value}</button>;
  }
  
function Board({xIsNext,squares,onPlay}) {
    // const [squares, setSquares] = useState(Array(9).fill(null)); // <- its an array . thats why only passing the value in setSqure won;t work!
   
    // function to handle click   
    function handleClick(i){

      
      const nextSqures = squares.slice();    
      if(squares[i] || calculateWinner(squares)){
        return;
      }
      if(xIsNext){
  
            nextSqures [i]= "X";  
          }
          else{
            nextSqures [i]= "O";
          }
          onPlay(nextSqures);
        }

    //winner
    const winner = calculateWinner(squares);
    let status;
    if(winner){
      status = "Winner: "+winner; 
    }
    else{
      status = "Next player : "+(xIsNext ? "X" : "O");
    }

    return (
      <>
         <div className="status">{status}</div>
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

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i =0 ; i < lines.length ; i++){
      const [a, b, c] = lines[i];

      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c] ){
        return squares[a];
      }
    }
    return null;
  }

  export default function Game(){
    const [xIsNext,setIsNext] = useState(true);
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSqures){
      setHistory([...history,nextSqures]);
      setIsNext(!xIsNext);
    }

    function jumpTo(nextMove){
      //todo
    }

    const moves = history.map((squares,move) => {
      let description;
      if(move > 0){
        description = "Go to move : "+move;
      }
      else{
        description = "Start The game ";
      }
      return (
        <li>
          <button onClick={jumpTo(move)}>{description}</button>
        </li>
      )
    });

    return(
      <div className='game'>
        <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
      </div>
    )
  }