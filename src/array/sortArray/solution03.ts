function sortArray(nums: number[]): number[] {
  // Сортировка слиянием
  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Левая часть
    const right = mergeSort(arr.slice(mid)); // Правая часть

    return merge(left, right);
  }

  function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0,
      j = 0;

    // Слияние двух отсортированных массивов
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    // Добавляем оставшиеся элементы
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }

    while (j < right.length) {
      result.push(right[j]);
      j++;
    }

    return result;
  }

  return mergeSort(nums);
}

// Пример использования
// @ts-ignore
const nums = [5, 2, 3, 1];
console.log(sortArray(nums)); // [1, 2, 3, 5]
