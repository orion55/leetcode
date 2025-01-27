function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  const result: number[] = new Array(nums.length);
  let position = nums.length - 1; // Индекс для добавления элементов в результат

  while (left <= right) {
    const leftSquare = Math.pow(nums[left], 2);
    const rightSquare = Math.pow(nums[right], 2);

    if (leftSquare > rightSquare) {
      result[position--] = leftSquare;
      left++;
    } else {
      result[position--] = rightSquare;
      right--;
    }
  }

  return result;
}

// @ts-ignore
const nums1 = [1, 2, 3, 4, 5];
console.log(sortedSquares(nums1)); // [1, 4, 9, 16, 25]

// @ts-ignore
const nums2 = [-5, -4, -3, -2, -1];
console.log(sortedSquares(nums2)); // [1, 4, 9, 16, 25]

// @ts-ignore
const nums3 = [-7, -3, -1, 2, 3, 5];
console.log(sortedSquares(nums3)); // [1, 4, 9, 9, 25, 49]
