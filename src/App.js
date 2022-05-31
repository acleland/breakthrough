import "./App.css";
import Board from "./utils/components/Board";
import { createGameBoard } from "./utils/gameUtils";

function App() {
  const board = createGameBoard();
  return (
    <div className="App">
      <h1>Breakthrough</h1>
      <Board board={board} />
    </div>
  );
}

export default App;
