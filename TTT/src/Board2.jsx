import { useState } from 'react';
import './Game.css'; // Make sure to import the massive CSS (see below)

/**
 * A single square of the Tic-Tac-Toe board.
 */
function Square({ value, onSquareClick, id }) {
  return (
    <button
      id={id}
      className={`square ${value ? 'filled' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

/**
 * The Tic-Tac-Toe board, rendered as three rows of squares.
 * Receives squares, whose turn it is (xIsNext), and a callback onPlay to handle moves.
 */
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // If there's a winner or the square is occupied, ignore the click
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div id="board-container" className={winner ? 'winner-burst' : ''}>
      <div className="status" id="board-status">
        {status}
      </div>

      {/* Row 1 */}
      <div className="board-row" id="board-row-1">
        <Square
          id="square-0"
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          id="square-1"
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          id="square-2"
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>

      {/* Row 2 */}
      <div className="board-row" id="board-row-2">
        <Square
          id="square-3"
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          id="square-4"
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          id="square-5"
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>

      {/* Row 3 */}
      <div className="board-row" id="board-row-3">
        <Square
          id="square-6"
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          id="square-7"
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          id="square-8"
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </div>
  );
}

/**
 * Helper function to determine the winner of the game.
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * The main Game component that stores the game's history, 
 * handles the toggling of background, and displays the Board + move list.
 */
export default function Game() {
  const [xIsNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [bgToggle, setBgToggle] = useState(false);

  // The most recent board configuration
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setIsNext(!xIsNext);
  }

  // Optional "jump to" past moves for time travel (demo usage)
  function jumpTo(move) {
    setIsNext(move % 2 === 0);
    setHistory(history.slice(0, move + 1));
  }

  // Toggle the swirling background
  function toggleBackground() {
    setBgToggle(!bgToggle);
  }

  // Build the list of past moves
  const moves = history.map((squares, move) => {
    let description = move > 0 ? `Go to move #${move}` : 'Start the game';
    return (
      <li
        className="moves-item"
        id={`move-item-${move}`}
        key={move}
      >
        <button
          className="moves-button"
          id={`move-button-${move}`}
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div
      className={`game ${bgToggle ? 'bg-alt' : ''}`}
      id="game-container"
    >
      <div className="game-board" id="board-section">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>

      <div className="game-info" id="info-section">
        <ol className="moves-list" id="moves-list">
          {moves}
        </ol>
        <button
          className="toggle-bg-button"
          id="toggle-bg-button"
          onClick={toggleBackground}
        >
          Toggle Background
        </button>
      </div>
    </div>
  );
}
