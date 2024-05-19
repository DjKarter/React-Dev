import './TicTacToe.css';
import React from "react";

//Идея 1: выделить победителей красным цветом, а в случае ничей желтым все символы.

interface ISquare {
    value: string | null;
    onSquareClick(): void;
}


export const Square:React.FC<ISquare> = ({value, onSquareClick} :ISquare) => {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
}

