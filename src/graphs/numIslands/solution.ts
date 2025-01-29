// @ts-ignore
function numIslands(grid: string[][]): number {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0') return;

    grid[i][j] = '0'; // "Заливаем" сушу в воду

    // Рекурсивно идем в 4 направления
    dfs(i + 1, j); // вниз
    dfs(i - 1, j); // вверх
    dfs(i, j + 1); // вправо
    dfs(i, j - 1); // влево
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j); // Заливаем остров
      }
    }
  }

  return count;
}

// Пример использования:
// @ts-ignore
const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

// @ts-ignore
console.log(numIslands(grid)); // 3
