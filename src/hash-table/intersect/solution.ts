// @ts-ignore
function intersect(nums1: number[], nums2: number[]): number[] {
  const countMap: { [key: number]: number } = {};
  const result: number[] = [];

  // Заполняем хеш-таблицу для первого массива
  for (const num of nums1) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // Проходим по второму массиву и ищем пересечения
  for (const num of nums2) {
    if (countMap[num] > 0) {
      result.push(num);
      countMap[num]--; // Уменьшаем счетчик
    }
  }

  return result;
}

// @ts-ignore
const nums1 = [1, 2, 2, 1];
// @ts-ignore
const nums2 = [2, 2];

console.log(intersect(nums1, nums2));
// Ожидаемый вывод: [2, 2]
