function minPathSum(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  // Используем сам grid как dp-массив (чтобы сэкономить память)

  // Заполняем первую строку (можно идти только справа)
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  // Заполняем первый столбец (можно идти только вниз)
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  // Заполняем остальную таблицу
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  // Ответ в последней клетке
  return grid[m - 1][n - 1];
}

// Пример использования:
const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum(grid)); // Выведет 7
