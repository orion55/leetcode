function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // dp[i] — максимальная сумма, которую можно получить, рассмотрев дома от 0 до i.
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // Если ограбим i-й дом, то к результату добавляем nums[i] и берём dp[i-2];
    // Если не ограбим, то результат равен dp[i-1].
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}

// Примеры использования:

// Пример 1:
// @ts-ignore
const example1 = [1, 2, 3, 1];
console.log('Пример 1:', rob(example1)); // Ожидаемый вывод: 4

// Пример 2:
// @ts-ignore
const example2 = [2, 7, 9, 3, 1];
console.log('Пример 2:', rob(example2)); // Ожидаемый вывод: 12

// Пример 3:
// @ts-ignore
const example3 = [5];
console.log('Пример 3:', rob(example3)); // Ожидаемый вывод: 5

// Пример 4:
// @ts-ignore
const example4: number[] = [];
console.log('Пример 4:', rob(example4)); // Ожидаемый вывод: 0
