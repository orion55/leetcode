function maxDistToClosest(seats: number[]): number {
  let maxDist = 0;
  let prev = -1; // индекс последнего занятого места

  // Пройдем по всем местам
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (prev === -1) {
        // Для первого блока пустых мест
        maxDist = i;
      } else {
        // Для блока пустых мест между двумя занятыми местами
        maxDist = Math.max(maxDist, Math.floor((i - prev) / 2));
      }
      prev = i;
    }
  }

  // Если после последнего занятого места остались пустые места
  maxDist = Math.max(maxDist, seats.length - 1 - prev);

  return maxDist;
}

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])); // 2
console.log(maxDistToClosest([1, 0, 0, 0])); // 3
console.log(maxDistToClosest([0, 0, 1, 0, 1, 0, 0])); // 2
console.log(maxDistToClosest([0, 1, 0, 1, 0])); // 1
console.log(maxDistToClosest([1, 0, 0, 0, 1])); // 2
