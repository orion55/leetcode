function solve(board: string[][]): void {
  if (board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;
  const queue: [number, number][] = [];

  // Функция добавления в очередь
  const enqueue = (r: number, c: number) => {
    if (r >= 0 && c >= 0 && r < rows && c < cols && board[r][c] === 'O') {
      board[r][c] = 'S';
      queue.push([r, c]);
    }
  };

  // 1. Поиск безопасных 'O' (на границах)
  for (let r = 0; r < rows; r++) {
    enqueue(r, 0);
    enqueue(r, cols - 1);
  }
  for (let c = 0; c < cols; c++) {
    enqueue(0, c);
    enqueue(rows - 1, c);
  }

  // BFS
  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    enqueue(r + 1, c);
    enqueue(r - 1, c);
    enqueue(r, c + 1);
    enqueue(r, c - 1);
  }

  // 2. Заменяем 'O' -> 'X', 'S' -> 'O'
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 'O') board[r][c] = 'X';
      if (board[r][c] === 'S') board[r][c] = 'O';
    }
  }
}

// @ts-ignore
const board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];

solve(board);
console.log(board);

// @ts-ignore
const board01 = [
  ['X', 'X', 'X', 'X', 'X'],
  ['X', 'O', 'X', 'O', 'X'],
  ['X', 'O', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X', 'X'],
  ['X', 'O', 'X', 'X', 'X'],
];

solve(board01);
console.log(board01);
// @ts-ignore
const board02 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
];

solve(board02);
console.log(board02);
