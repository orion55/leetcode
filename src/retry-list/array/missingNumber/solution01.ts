// @ts-ignore
function missingNumber(nums: number[]): number {
  const n = nums.length;
  let xorAll = 0;
  let xorNums = 0;

  // XOR всех чисел от 0 до n
  for (let i = 0; i <= n; i++) {
    xorAll ^= i;
  }

  // XOR всех чисел в массиве
  for (const num of nums) {
    xorNums ^= num;
  }
  console.log({ xorAll, xorNums });
  // Пропущенное число - результат XOR двух операций
  return xorAll ^ xorNums;
}

// @ts-ignore
const nums = [3, 7, 1, 2, 8, 4, 5];
console.log(missingNumber(nums)); // Вывод: 6
