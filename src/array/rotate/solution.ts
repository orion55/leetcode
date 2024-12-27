function rotateArray(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n; // Учитываем случай, когда k больше длины массива

  // Вспомогательная функция для разворота части массива
  function reverse(start: number, end: number): void {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]; // Меняем элементы местами
      start++;
      end--;
    }
  }

  // Шаг 1: Разворачиваем весь массив
  reverse(0, n - 1);
  // Шаг 2: Разворачиваем первые k элементов
  reverse(0, k - 1);
  // Шаг 3: Разворачиваем оставшиеся элементы
  reverse(k, n - 1);
}

// Пример использования:
const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotateArray(nums1, 3);
console.log(nums1); // Вывод: [5, 6, 7, 1, 2, 3, 4]

const nums2 = [-1, -100, 3, 99];
rotateArray(nums2, 2);
console.log(nums2); // Вывод: [3, 99, -1, -100]
