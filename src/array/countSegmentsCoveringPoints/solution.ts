type Segment = [number, number];
type Point = number;

function countSegmentsCoveringPoints(segments: Segment[], points: Point[]): number[] {
  const events: { value: number; type: -1 | 0 | 1; id?: number }[] = [];

  // Добавляем начала и концы отрезков
  for (const [a, b] of segments) {
    events.push({ value: Math.min(a, b), type: 1 }); // Начало отрезка
    events.push({ value: Math.max(a, b), type: -1 }); // Конец отрезка
  }

  // Добавляем точки
  points.forEach((point, id) => {
    events.push({ value: point, type: 0, id }); // Точка
  });

  // Исправленная сортировка
  events.sort((a, b) => {
    if (a.value !== b.value) {
      return a.value - b.value; // Сортировка по координате
    }
    // Приоритет: начало (1) → точка (0) → конец (-1)
    return b.type - a.type;
  });

  const result = new Array(points.length).fill(0);
  let activeSegments = 0;

  // Обрабатываем события
  for (const event of events) {
    if (event.type === 1) {
      activeSegments++; // Начало отрезка
    } else if (event.type === -1) {
      activeSegments--; // Конец отрезка
    } else if (event.type === 0 && event.id !== undefined) {
      result[event.id] = activeSegments; // Записываем результат для точки
    }
  }

  return result;
}

// Пример использования
const segments: Segment[] = [
  [1, 4],
  [2, 6],
  [8, 10],
];
const points: Point[] = [1, 3, 11];

// @ts-ignore
const result = countSegmentsCoveringPoints(segments, points);
console.log(result); // [1, 2, 0]
