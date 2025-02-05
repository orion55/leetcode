function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let currentCount = 0;

  for (const num of nums) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Пример использования
// @ts-ignore
const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums)); // Вывод: 3
