function numIslands(grid: string[][]): number {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // Направления движения (вниз, вверх, вправо, влево)
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (i: number, j: number) => {
    const queue: [number, number][] = [[i, j]];
    grid[i][j] = '0'; // "Заливаем" сушу в воду

    while (queue.length > 0) {
      const [x, y] = queue.shift()!;

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === '1') {
          grid[newX][newY] = '0'; // "Заливаем"
          queue.push([newX, newY]);
        }
      }
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        count++;
        bfs(i, j); // Запускаем BFS
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
