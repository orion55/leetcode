function maxAreaOfIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0], // Вправо, вниз, влево, вверх
  ];

  function dfs(r: number, c: number): number {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
      return 0;
    }

    grid[r][c] = 0; // Помечаем клетку как посещённую
    let area = 1;

    for (const [dr, dc] of directions) {
      area += dfs(r + dr, c + dc);
    }

    return area;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }

  return maxArea;
}

// Примеры
// @ts-ignore
const testCases = [
  {
    grid: [
      [0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    ],
    expected: 4,
  },

  {
    grid: [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1],
    ],
    expected: 4,
  },

  {
    grid: [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ],
    expected: 20,
  },

  {
    grid: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    expected: 0,
  },
];

// Запуск тестов
for (const { grid, expected } of testCases) {
  const result = maxAreaOfIsland(grid.map((row) => [...row])); // Клонируем, чтобы не портить оригинал
  console.log(`Result: ${result}, Expected: ${expected}, ${result === expected ? '✅' : '❌'}`);
}
