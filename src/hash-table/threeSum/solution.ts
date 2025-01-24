function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const map = new Map<number, number>(); // Для хранения частоты чисел

  // Сортируем массив для удобства поиска уникальных триплетов
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Пропускаем одинаковые элементы для предотвращения дублирования
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const target = -nums[i];
    map.clear(); // Очищаем карту на каждом шаге внешнего цикла

    for (let j = i + 1; j < nums.length; j++) {
      const complement = target - nums[j];

      // Если complement найден в карте, то это решение
      if (map.has(complement)) {
        result.push([nums[i], nums[j], complement]);

        // Пропускаем одинаковые элементы, чтобы избежать дублирования
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
          j++;
        }
      }

      // Добавляем текущее число в карту
      map.set(nums[j], j);
    }
  }

  return result;
}

// @ts-ignore
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Выведет: [[-1,-1,2],[-1,0,1]]

// @ts-ignore
const nums1 = [0, 1, 1];
console.log(threeSum(nums1)); // Выведет: []

// @ts-ignore
const nums2 = [0, 0, 0];
console.log(threeSum(nums2)); // Выведет: [[0,0,0]]
