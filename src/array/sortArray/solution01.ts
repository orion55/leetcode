// @ts-ignore
function sortArray(nums: number[]): number[] {
  // Быстрая сортировка
  function quickSort(arr: number[], left: number, right: number): void {
    if (left >= right) return;

    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right]; // Опорный элемент
    let i = left; // Указатель для разделения

    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Обмен
        i++;
      }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]]; // Помещаем pivot в правильное место
    return i;
  }

  quickSort(nums, 0, nums.length - 1);
  return nums;
}

// Пример использования
// @ts-ignore
const nums = [5, 2, 3, 1];
console.log(sortArray(nums)); // [1, 2, 3, 5]
