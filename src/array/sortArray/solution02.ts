function sortArray(nums: number[]): number[] {
  const n = nums.length;

  // Построение кучи (heapify)
  function heapify(arr: number[], n: number, i: number): void {
    let largest = i; // Инициализация наибольшего как корня
    const left = 2 * i + 1; // Левый дочерний
    const right = 2 * i + 2; // Правый дочерний

    // Если левый дочерний больше корня
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // Если правый дочерний больше, чем наибольший элемент
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // Если наибольший элемент не корень
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Обмен
      heapify(arr, n, largest); // Рекурсивно heapify
    }
  }

  // Построение max-кучи
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(nums, n, i);
  }

  // Извлечение элементов из кучи
  for (let i = n - 1; i > 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]]; // Перемещаем текущий корень в конец
    heapify(nums, i, 0); // Вызываем heapify на уменьшенной куче
  }

  return nums;
}

// Пример использования
// @ts-ignore
const nums = [5, 2, 3, 1];
console.log(sortArray(nums)); // [1, 2, 3, 5]
