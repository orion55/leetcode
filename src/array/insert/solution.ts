function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let i = 0;

  // 1. Добавляем все интервалы, которые заканчиваются до начала нового интервала.
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 2. Объединяем пересекающиеся интервалы с новым интервалом.
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // 3. Добавляем оставшиеся интервалы.
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

// Пример использования:
// @ts-ignore
const intervals = [
  [1, 3],
  [6, 9],
];
const newInterval = [2, 5];
// @ts-ignore
console.log(insert(intervals, newInterval));
// Вывод: [[1, 5], [6, 9]]
