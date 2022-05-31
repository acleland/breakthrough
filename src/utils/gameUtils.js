export const GRID_WIDTH = 8;
export const GRID_HEIGHT = 8;

export function createGameBoard() {
  const board = [];
  for (let i = 0; i < GRID_HEIGHT; i++) {
    board.push([]);
    for (let j = 0; j < GRID_WIDTH; j++) {
      board[i].push({
        color:
          i % 2 === 0
            ? j % 2 === 0
              ? "light"
              : "dark"
            : j % 2 === 0
            ? "dark"
            : "light",
      });
    }
  }
  return board;
}
