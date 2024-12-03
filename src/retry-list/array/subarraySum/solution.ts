function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let sum = 0;
  const sumMap: Map<number, number> = new Map();
  sumMap.set(0, 1);

  for (const num of nums) {
    sum += num;
    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k) || 0;
    }
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }
  console.log({ sumMap });
  return count;
}

// Пример использования:
/*const nums = [1, 2, 3];
const k = 3;
console.log(subarraySum(nums, k)); // Вывод: 2*/

const nums = [3, 4, 7, -2, 2, 1];
const k = 7;
console.log(subarraySum(nums, k));
