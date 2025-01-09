function sumOfInterval(start: number, end: number): number {
  if (start > end) {
    // Если start больше end, меняем их местами
    [start, end] = [end, start];
  }

  // Формула суммы арифметической прогрессии: S = n * (a1 + an) / 2
  const count = end - start + 1; // Количество чисел в интервале
  return ((start + end) * count) / 2;
}

// Пример использования
const start = -5;
const end = 10;
// @ts-ignore
const result = sumOfInterval(start, end);
console.log(`Сумма чисел от ${start} до ${end} равна ${result}`);
