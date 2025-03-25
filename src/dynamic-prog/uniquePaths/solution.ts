// @ts-ignore
function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}

console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(3, 3)); // 6
console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(1, 1)); // 1
console.log(uniquePaths(10, 10)); // 48620
console.log(uniquePaths(23, 12)); // 193536720
console.log(uniquePaths(51, 9)); // 1916797311
