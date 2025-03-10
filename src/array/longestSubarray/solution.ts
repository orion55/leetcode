function longestSubarray(nums: number[]): number {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    // Если в окне оказалось больше одного нуля,
    // сдвигаем левую границу до восстановления условия.
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // Размер окна равен (right - left + 1), однако,
    // поскольку требуется удалить один элемент, фактическая длина = (right - left + 1) - 1.
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
}

// Примеры вызова функции

// Пример 1: Массив [1, 1, 0, 1]
// Ожидаемый результат: 3
const example1 = [1, 1, 0, 1];
console.log(`Example 1: Input: [${example1}], Output: ${longestSubarray(example1)}`);

// Пример 2: Массив [0, 1, 1, 1, 0, 1, 1, 0, 1]
// Ожидаемый результат: 5
const example2 = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(`Example 2: Input: [${example2}], Output: ${longestSubarray(example2)}`);

// Пример 3: Массив [1, 1, 1]
// Ожидаемый результат: 2 (обязательное удаление одного элемента)
const example3 = [1, 1, 1];
console.log(`Example 3: Input: [${example3}], Output: ${longestSubarray(example3)}`);

// Пример 4: Массив [0, 0, 0]
// Ожидаемый результат: 0
const example4 = [0, 0, 0];
console.log(`Example 4: Input: [${example4}], Output: ${longestSubarray(example4)}`);
