/*Идея решения
1. Используем два указателя: left и right.
2. Расширяем окно (увеличиваем right), суммируя элементы.
3. Когда сумма в окне становится больше либо равна target, пытаемся сдвигать left вправо, чтобы сузить окно и при этом сохранить условие суммы ≥ target.
4. Запоминаем минимальный размер окна, когда сумма ≥ target.
5. Если в конце прохода не нашли подходящее окно, возвращаем 0.*/

function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Ожидается: 2
console.log(minSubArrayLen(4, [1, 4, 4])); // Ожидается: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Ожидается: 0
