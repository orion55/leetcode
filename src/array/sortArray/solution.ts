// @ts-ignore
function sortArray(nums: number[]): number[] {
  const n = nums.length;
  let swapped: boolean;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Проходим по массиву, исключая уже отсортированные элементы
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        // Меняем местами, если текущий элемент больше следующего
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }

    // Если на текущей итерации не было обменов, массив отсортирован
    if (!swapped) break;
  }

  return nums;
}

// Пример использования
// @ts-ignore
const nums = [5, 2, 3, 1];
console.log(sortArray(nums)); // [1, 2, 3, 5]
