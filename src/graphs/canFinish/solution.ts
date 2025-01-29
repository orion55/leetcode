function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: Map<number, number[]> = new Map();
  const inDegree: number[] = new Array(numCourses).fill(0);

  // 1. Построим граф
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) graph.set(prereq, []);
    graph.get(prereq)!.push(course);
    inDegree[course]++; // Увеличиваем входную степень для course
  }

  // 2. Находим курсы без зависимостей (inDegree[i] === 0)
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let count = 0; // Количество посещенных курсов

  // 3. Топологический обход (алгоритм Kahn)
  while (queue.length > 0) {
    const course = queue.shift()!;
    count++;

    // Уменьшаем входную степень зависимых курсов
    for (const nextCourse of graph.get(course) || []) {
      inDegree[nextCourse]--;
      if (inDegree[nextCourse] === 0) queue.push(nextCourse);
    }
  }

  // 4. Если удалось посетить все курсы — нет цикла
  return count === numCourses;
}

console.log(canFinish(2, [[1, 0]])); // true (можно пройти курс 0 → потом 1)
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
); // false (есть цикл 0 → 1 → 0)
console.log(
  canFinish(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
); // true
console.log(
  canFinish(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ]),
); // false (есть цикл)
