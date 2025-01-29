function uniquePathsWithObstacles(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) return 0;

  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        if (i > 0) dp[i][j] += dp[i - 1][j];
        if (j > 0) dp[i][j] += dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
);
// Вывод: 2
