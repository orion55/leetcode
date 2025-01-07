function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // возвращаем индексы в 1-based
    } else if (sum < target) {
      left++; // увеличиваем left, чтобы сумма увеличилась
    } else {
      right--; // уменьшаем right, чтобы сумма уменьшилась
    }
  }

  return []; // если не нашли, возвращаем пустой массив
}

const numbers = [2, 7, 11, 15];
// @ts-ignore
const target = 9;
console.log(twoSum(numbers, target)); // [1, 2]
