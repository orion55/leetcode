function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  const n = nums.length;

  // Сортируем массив для упрощения работы с дубликатами
  nums.sort((a, b) => a - b);

  // Используем Map для хранения всех возможных пар
  for (let i = 0; i < n - 3; i++) {
    // Пропускаем дублирующиеся элементы для первого числа
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      // Пропускаем дублирующиеся элементы для второго числа
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      const pairSum = target - (nums[i] + nums[j]);
      const map = new Map<number, number>();

      for (let k = j + 1; k < n; k++) {
        const complement = pairSum - nums[k];

        // Если находим пару, которая вместе с nums[k] дает нужную сумму
        if (map.has(complement)) {
          result.push([nums[i], nums[j], nums[map.get(complement)!], nums[k]]);

          // Пропускаем дублирующиеся элементы для третьего и четвертого чисел
          while (k < n - 1 && nums[k] === nums[k + 1]) k++;
        }

        // Добавляем текущий элемент в Map
        map.set(nums[k], k);
      }
    }
  }

  return result;
}

// @ts-ignore
const nums = [1, 0, -1, 0, -2, 2];
// @ts-ignore
const target = 0;
console.log(fourSum(nums, target));
