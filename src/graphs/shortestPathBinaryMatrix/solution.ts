function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1; // Если старт или финиш заблокирован

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  const queue: [number, number, number][] = [[0, 0, 1]]; // [x, y, pathLength]
  const visited = new Set<string>();
  visited.add('0,0');

  while (queue.length > 0) {
    const [x, y, length] = queue.shift()!;

    if (x === n - 1 && y === n - 1) return length; // Достигли финиша

    for (const [dx, dy] of directions) {
      const newX = x + dx,
        newY = y + dy;
      if (newX >= 0 && newX < n && newY >= 0 && newY < n && grid[newX][newY] === 0 && !visited.has(`${newX},${newY}`)) {
        queue.push([newX, newY, length + 1]);
        visited.add(`${newX},${newY}`);
      }
    }
  }

  return -1; // Путь не найден
}

// @ts-ignore
const testCases: [number[][], number][] = [
  [
    [
      [0, 1],
      [1, 0],
    ],
    2,
  ],
  [
    [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
    4,
  ],
  [
    [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
    -1, // Стартовая позиция заблокирована
  ],
  [
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    3,
  ],
  [
    [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
    ],
    7,
  ],
];

// Запуск тестов
// @ts-ignore
for (const [grid, expected] of testCases) {
  console.log(`Grid:\n${grid.map((row: any[]) => row.join(' ')).join('\n')}`);
  const result = shortestPathBinaryMatrix(grid);
  console.log(`Expected: ${expected}, Got: ${result}`);
  console.log('---------------------------------');
}
