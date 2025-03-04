function sortColors(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 2
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Пример использования:
// @ts-ignore
const arr: number[] = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr); // Выведет: [0, 0, 1, 1, 2, 2]
