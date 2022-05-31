import React from "react";
import Cell from "./Cell";

export default function Board({ board }) {
  return (
    <div>{board.map((row) => row.map((cell, col) => <Cell key={col} />))}</div>
  );
}
