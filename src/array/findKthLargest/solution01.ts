// @ts-ignore
function findKthLargest(nums: number[], k: number): number {
  function quickSelect(left: number, right: number, kSmallest: number): number {
    if (left === right) return nums[left];

    const pivotIndex = partition(left, right);

    if (kSmallest === pivotIndex) {
      return nums[kSmallest];
    } else if (kSmallest < pivotIndex) {
      return quickSelect(left, pivotIndex - 1, kSmallest);
    } else {
      return quickSelect(pivotIndex + 1, right, kSmallest);
    }
  }

  function partition(left: number, right: number): number {
    const pivot = nums[right];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
      if (nums[i] > pivot) {
        // Sort in descending order
        [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
        storeIndex++;
      }
    }

    [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
    return storeIndex;
  }

  return quickSelect(0, nums.length - 1, k - 1);
}

// Пример использования
// @ts-ignore
const nums = [3, 2, 1, 5, 6, 4];
// @ts-ignore
const k = 2;
console.log(findKthLargest(nums, k)); // Ожидаемый результат: 5
