// @ts-ignore
function missingNumber(nums: number[]): number {
  const n = nums.length;
  const sum_n = (n * (n + 1)) / 2;
  const sum_nums = nums.reduce((acc, num) => acc + num, 0);
  return sum_n - sum_nums;
}

// @ts-ignore
const nums = [3, 7, 1, 2, 8, 4, 5];
console.log(missingNumber(nums)); // Output: 6
