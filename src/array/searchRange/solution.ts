const searchRange = (nums: number[], target: number): number[] => {
  const result: number[] = [-1, -1];

  // Функция для изменения границ поиска в зависимости от направления
  const adjustBounds = (isLeft: boolean, left: number, right: number): [number, number] => {
    return isLeft ? [left, right - 1] : [left + 1, right];
  }; // Ищем в левой или правой части

  // Функция для проверки, является ли mid целевым элементом
  const good = (mid: number, target: number): boolean => {
    return nums[mid] === target;
  };

  // Функция для бинарного поиска
  const binarySearch = (isLeft: boolean): number => {
    let left = 0,
      right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (good(mid, target)) {
        index = mid;
        // Используем adjustBounds для изменения границ
        [left, right] = adjustBounds(isLeft, left, right);
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return index;
  };

  result[0] = binarySearch(true); // Найдем левую границу
  if (result[0] !== -1) {
    result[1] = binarySearch(false); // Найдем правую границу
  }

  return result;
};

// Пример использования:
// @ts-ignore
const nums = [5, 7, 7, 8, 8, 10];
// @ts-ignore
const target = 8;
console.log(searchRange(nums, target)); // Выведет [3, 4]
