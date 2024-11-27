import './TicTacToe.css';
import { Square } from './Square.tsx';
import React from 'react';

interface IBoard {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay(nextSquares: (string | null)[]): void;
}

export const Board: React.FC<IBoard> = ({
  xIsNext,
  squares,
  onPlay,
}: IBoard) => {
  /* Без Game
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (index:number) => {
        if (!squares[index] && !calculateWinner(squares)) {
            const nextSquares = squares.slice();
            nextSquares[index] = xIsNext ? "X" : "O";
            setXIsNext(!xIsNext);
            setSquares(nextSquares);
        }
    }
    */

  const handleClick = (index: number) => {
    if (!squares[index] && !calculateWinner(squares)) {
      const nextSquares = squares.slice();
      nextSquares[index] = xIsNext ? 'X' : 'O';
      onPlay(nextSquares);
    }
  };

  const calculateWinner = (squares: (string | null)[]) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; ++i) {
      const [a, b, c] = winConditions[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);

  return (
    <>
      <div className="status">
        {winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')}{' '}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};