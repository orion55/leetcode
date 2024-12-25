function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;

  // Вспомогательная функция для проверки условия
  const good = (mid: number): boolean => {
    return arr[mid] >= arr[mid + 1];
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // Если good(mid) возвращает true, пик слева или на mid
    if (good(mid)) {
      right = mid;
    } else {
      // Иначе пик справа
      left = mid + 1;
    }
  }

  // Возвращаем индекс пика
  return left;
}

// Пример использования
const arr = [0, 2, 1, 0];
console.log(peakIndexInMountainArray(arr)); // Вывод: 1
