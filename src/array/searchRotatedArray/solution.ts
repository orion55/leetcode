function search(nums: number[], target: number): number {
  function findOffset(): number {
    let left = 0;
    let right = nums.length - 1;

    function good(mid: number): boolean {
      return nums[mid] > nums[right];
    }

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (good(mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  const offset = findOffset();
  let left = 0;
  let right = nums.length - 1;

  function good(index: number): boolean {
    return nums[index] === target;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const realMid = (mid + offset) % nums.length;

    // Check if the middle element is the target
    if (good(realMid)) {
      return realMid;
    }

    if (nums[realMid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Target not found
  return -1;
}

// Example usage
// @ts-ignore
const nums = [4, 5, 6, 7, 0, 1, 2];
// @ts-ignore
const target = 0;
console.log(search(nums, target)); // Output: 4
