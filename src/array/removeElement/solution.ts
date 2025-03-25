// @ts-ignore
function removeElement(nums: number[], val: number): number {
  const nonValue = nums.filter((num) => num !== val);
  nums.length = 0;
  nums.push(...nonValue);
  return nonValue.length;
}

// @ts-ignore
const arr = [3, 2, 2, 3];
// @ts-ignore
console.log(removeElement(arr, 3));

// @ts-ignore
const arr1 = [0, 1, 2, 2, 3, 0, 4, 2];
// @ts-ignore
console.log(removeElement(arr1, 2));
