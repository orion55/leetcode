// @ts-ignore
function singleNumber(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num; // XOR с каждым числом
  }
  return result;
}

// Пример использования:
// @ts-ignore
const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // Вывод: 4
