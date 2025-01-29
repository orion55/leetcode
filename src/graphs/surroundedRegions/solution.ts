// @ts-ignore
function solve(board: string[][]): void {
  if (board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  // Функция DFS для поиска и маркировки безопасных 'O'
  const dfs = (r: number, c: number) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== 'O') return;
    board[r][c] = 'S'; // Временная отметка
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  // 1. Поиск безопасных 'O' (на границах и связанных с ними)
  for (let r = 0; r < rows; r++) {
    dfs(r, 0); // Левая граница
    dfs(r, cols - 1); // Правая граница
  }
  for (let c = 0; c < cols; c++) {
    dfs(0, c); // Верхняя граница
    dfs(rows - 1, c); // Нижняя граница
  }

  // 2. Заменяем все оставшиеся 'O' на 'X', а 'S' возвращаем в 'O'
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
