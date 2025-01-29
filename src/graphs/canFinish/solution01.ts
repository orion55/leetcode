function canFinishDFS(numCourses: number, prerequisites: number[][]): boolean {
  const graph: Map<number, number[]> = new Map();
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) graph.set(prereq, []);
    graph.get(prereq)!.push(course);
  }

  const visitState: number[] = new Array(numCourses).fill(0);

  function hasCycle(course: number): boolean {
    if (visitState[course] === 1) return true; // Цикл найден
    if (visitState[course] === 2) return false; // Уже проверяли

    visitState[course] = 1; // Помечаем как обрабатываемый
    for (const nextCourse of graph.get(course) || []) {
      if (hasCycle(nextCourse)) return true;
    }
    visitState[course] = 2; // Отмечаем как завершенный
    return false;
  }

  // Проверяем каждый курс
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
}

console.log(canFinishDFS(2, [[1, 0]])); // true (можно пройти курс 0 → потом 1)
console.log(
  canFinishDFS(2, [
    [1, 0],
    [0, 1],
  ]),
); // false (есть цикл 0 → 1 → 0)
console.log(
  canFinishDFS(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
); // true
console.log(
  canFinishDFS(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ]),
); // false (есть цикл)
