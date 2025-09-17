import { Square } from "./Square";
import { calculateWinner } from "../utils/calcWinner";

interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

export function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const currentPlayer = xIsNext ? "X" : "O";

  return (
    <>
    
      <div className="status">{status}</div>
      <div className = "board-cont">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} currentPlayer={currentPlayer} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} currentPlayer={currentPlayer} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} currentPlayer={currentPlayer} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} currentPlayer={currentPlayer} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} currentPlayer={currentPlayer} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} currentPlayer={currentPlayer} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} currentPlayer={currentPlayer} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} currentPlayer={currentPlayer} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} currentPlayer={currentPlayer} />
      </div>
    </div>
    </>
  );
}