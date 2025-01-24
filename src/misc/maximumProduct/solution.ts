function maximumProduct(nums: number[]): number {
  // Инициализируем переменные для 3 наибольших и 2 наименьших чисел
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;
  let min1 = Infinity,
    min2 = Infinity;

  // Один проход по массиву для нахождения необходимых чисел
  for (const num of nums) {
    // Обновляем наибольшие числа
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    // Обновляем наименьшие числа
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  // Два возможных варианта максимального произведения
  const product1 = max1 * max2 * max3;
  const product2 = min1 * min2 * max1;

  // Возвращаем максимальное из двух вариантов
  return Math.max(product1, product2);
}

// Пример использования
// @ts-ignore
const nums = [1, -4, 3, -6, 7, 0];
console.log(maximumProduct(nums)); // Output: 168

// @ts-ignore
const nums1 = [1, 2, 3, 4];
console.log(maximumProduct(nums1)); // Ожидается: 24

// @ts-ignore
const nums2 = [-1, -2, -3];
console.log(maximumProduct(nums2)); // Ожидается: -6

// @ts-ignore
const nums3 = [-100, -98, -1, 2, 3, 4];
console.log(maximumProduct(nums3)); // Ожидается: 39200

// @ts-ignore
const nums4 = [-100, -2, -3, 1];
console.log(maximumProduct(nums4)); // Ожидается: 300
