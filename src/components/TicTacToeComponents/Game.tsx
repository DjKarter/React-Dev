import './TicTacToe.css';
import React, {useState} from "react";
import {Board} from "./Board.tsx";

export const Game: React.FC = () => {
    const [history, setHistory] = useState([
        Array(9).fill(null),
    ]);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    const handlePlay = (nextSquares:(string|null)[]) => {
        /*const newHistory = history.slice();
        newHistory.push(nextSquares);
        setHistory(newHistory);
        А через спред => setHistory([...history, nextSquares]);
        */
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            nextSquares,
        ];

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove:number) => {
        setCurrentMove(nextMove);
    }

    const moves = history.map ((_elem:(string|null)[], index ) => {

       return (
           <li key={index}>
               <button onClick={() => jumpTo(index)}>
                   {index > 0 ? 'Go to move #' + index : 'Go to game start'}
               </button>

           </li>
       )


    })

    return (
        <div className="game">

            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
                <div className="status" style={{margin:'20px'}}>{currentMove === 0 ? 'Игра началась' : `Текущий ход: ${currentMove}`} </div>
            </div>

            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
