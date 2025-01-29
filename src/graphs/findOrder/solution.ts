// eslint-disable-next-line no-unused-vars
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: Map<number, number[]> = new Map();
  const inDegree: number[] = new Array(numCourses).fill(0);

  // Построение графа
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) graph.set(prereq, []);
    graph.get(prereq)!.push(course);
    inDegree[course]++;
  }

  // Поиск всех курсов с 0 входной степенью (без зависимостей)
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const order: number[] = [];

  // Алгоритм Kahn (BFS)
  while (queue.length) {
    const course = queue.shift()!;
    order.push(course);

    if (graph.has(course)) {
      for (const next of graph.get(course)!) {
        inDegree[next]--;
        if (inDegree[next] === 0) queue.push(next);
      }
    }
  }

  return order.length === numCourses ? order : [];
}

console.log(findOrder(2, [[1, 0]]));
// Ожидаемый вывод: [0, 1]
// Курс 0 должен быть пройден перед курсом 1.
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
// Ожидаемый вывод: [0, 1, 2, 3] или [0, 2, 1, 3]
// Курс 0 должен быть пройден перед курсами 1 и 2.
// Курс 1 и 2 должны быть пройдены перед курсом 3.
console.log(
  findOrder(2, [
    [0, 1],
    [1, 0],
  ]),
);
// Ожидаемый вывод: []
// Есть цикл: курс 0 зависит от курса 1, а курс 1 зависит от курса 0.
console.log(findOrder(3, []));
// Ожидаемый вывод: [0, 1, 2] (или в другом порядке)
// Нет ограничений, можно проходить в любом порядке.
console.log(findOrder(1, []));
// Ожидаемый вывод: [0]
// Только один курс, его можно сразу пройти.
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
  ]),
);
// Ожидаемый вывод: [0, 1, 2, 3] или [0, 2, 1, 3]
// Курс 0 — базовый, от него зависят 1 и 2, а 3 зависит от 1.
