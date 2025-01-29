// eslint-disable-next-line no-unused-vars
function uniquePaths(m: number, n: number): number {
  const dp: number[] = Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[n - 1];
}

console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(3, 3)); // 6
console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(1, 1)); // 1
console.log(uniquePaths(10, 10)); // 48620
console.log(uniquePaths(23, 12)); // 193536720
console.log(uniquePaths(51, 9)); // 1916797311
