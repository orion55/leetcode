function sortColors(nums: number[]): void {
  const redValues = nums.filter((num) => num === 0);
  const whiteValues = nums.filter((num) => num === 1);
  const blueValues = nums.filter((num) => num === 2);

  nums.length = 0;
  nums.push(...redValues, ...whiteValues, ...blueValues);
}

// @ts-ignore
const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);

// @ts-ignore
const arr1 = [2, 0, 1];
sortColors(arr1);
console.log(arr1);
