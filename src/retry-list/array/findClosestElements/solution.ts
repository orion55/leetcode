function findClosestElements(arr: number[], k: number, x: number): number[] {
  // Helper function to compare distances
  function good(leftValue: number, rightValue: number, target: number): boolean {
    return Math.abs(leftValue - target) > Math.abs(rightValue - target);
  }

  // Binary search to find the insertion point for x
  let left = 0;
  let right = arr.length - 1;

  // Narrow down to k closest elements
  while (right - left >= k) {
    // Compare which side to remove
    if (good(arr[left], arr[right], x)) {
      left++;
    } else {
      right--;
    }
  }

  // Slice the array to get the result and sort it
  return arr.slice(left, left + k).sort((a, b) => a - b);
}

// Example usage
// @ts-ignore
const arr = [1, 2, 3, 4, 5];
// @ts-ignore
const k = 4;
const x = 3;
// @ts-ignore
const result = findClosestElements(arr, k, x);
console.log(result); // Output: [1, 2, 3, 4]
