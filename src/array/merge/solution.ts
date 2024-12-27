function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  // Шаг 1: Сортировка интервалов по начальному времени
  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const nextInterval = intervals[i];

    // Шаг 2: Проверка на пересечение интервалов
    if (currentInterval[1] >= nextInterval[0]) {
      // Объединяем интервалы, обновляя конечное время
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      // Нет пересечения, добавляем текущий интервал в результат
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }

  // Добавляем последний интервал
  result.push(currentInterval);

  return result;
}

// Тестовые примеры
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
); // Вывод: [[1, 6], [8, 10], [15, 18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ]),
); // Вывод: [[1, 5]]
