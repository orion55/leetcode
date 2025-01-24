function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i]; // Возвращаем индексы
    }

    map.set(nums[i], i); // Добавляем текущее число в Map
  }

  throw new Error('No solution found');
}

// @ts-ignore
const nums = [2, 7, 11, 15];
// @ts-ignore
const target = 9;
console.log(twoSum(nums, target)); // Выведет: [0, 1]
