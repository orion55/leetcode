function findRepeatedAndMissing(nums: number[]): [number, number] {
  const n = nums.length;

  // Рассчитаем ожидаемую сумму и сумму квадратов для чисел от 1 до n
  const expectedSum = (n * (n + 1)) / 2;
  const expectedSquareSum = (n * (n + 1) * (2 * n + 1)) / 6;

  // Вычисляем фактическую сумму и сумму квадратов из массива
  let actualSum = 0;
  let actualSquareSum = 0;

  for (const num of nums) {
    actualSum += num;
    actualSquareSum += num * num;
  }

  // Пусть A — повторяющееся число, а B — пропущенное число
  const sumDifference = actualSum - expectedSum; // A - B
  const squareSumDifference = actualSquareSum - expectedSquareSum; // A^2 - B^2

  // Используем формулу (A^2 - B^2) = (A - B)(A + B)
  const sumPlusDifference = squareSumDifference / sumDifference; // A + B

  // Решаем уравнения:
  // A - B = sumDifference
  // A + B = sumPlusDifference
  const A = (sumDifference + sumPlusDifference) / 2;
  const B = A - sumDifference;

  return [A, B];
}

// Пример использования:
// @ts-ignore
const nums = [3, 1, 2, 5, 3];
// @ts-ignore
const result = findRepeatedAndMissing(nums);
console.log(`Повторяющееся: ${result[0]}, Пропущенное: ${result[1]}`);
// Результат: Повторяющееся: 3, Пропущенное: 4
