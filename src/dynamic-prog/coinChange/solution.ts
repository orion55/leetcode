function coinChange(coins: number[], amount: number): number {
  // Инициализируем dp массив, где dp[i] - минимальное количество монет для суммы i.
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Для суммы 0 монет не требуется

  // Для каждой суммы от 1 до amount
  for (let i = 1; i <= amount; i++) {
    // Перебираем каждую монету
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // Если для суммы amount не найдено решение, возвращаем -1
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Пример использования:
console.log(coinChange([1, 2, 5], 11)); // Вывод: 3 (11 = 5 + 5 + 1)
