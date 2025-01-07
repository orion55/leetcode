function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Рассчитываем площадь между текущими указателями
    const currentArea = (right - left) * Math.min(height[left], height[right]);

    // Обновляем максимальную площадь
    maxArea = Math.max(maxArea, currentArea);

    // Двигаем указатели
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights1)); // Output: 49

const heights2 = [4, 4, 4, 4, 4];
console.log(maxArea(heights2)); // Output: 16

const heights3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(maxArea(heights3)); // Output: 25

const heights6 = [1, 8, 1, 8, 1, 8];
console.log(maxArea(heights6)); // Output: 16
