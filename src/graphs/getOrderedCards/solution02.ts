// @ts-ignore
interface Card {
  id: number;
  dependent: number[];
}

// @ts-ignore
const getOrderedCards = (cards: Card[]): number[] => {
  // Построим граф, где ребро: A -> B означает, что B зависит от A.
  // То есть если card B имеет в dependent значение A, то добавляем ребро A -> B.
  const graph = new Map<number, number[]>(); // key: id карточки, value: список карточек, зависящих от неё
  const inDegree = new Map<number, number>(); // key: id карточки, value: число входящих ребер

  // Инициализируем все карточки: inDegree = 0 и пустой список зависимых
  for (const card of cards) {
    inDegree.set(card.id, 0);
    graph.set(card.id, []);
  }

  // Заполним граф и посчитаем inDegree
  for (const card of cards) {
    for (const dep of card.dependent) {
      // Если карточка card зависит от dep, значит существует ребро: dep -> card.id
      if (!graph.has(dep)) {
        graph.set(dep, []);
      }
      graph.get(dep)!.push(card.id);
      inDegree.set(card.id, (inDegree.get(card.id) || 0) + 1);
    }
  }

  // Для детерминированности результата формируем очередь из карточек с inDegree === 0.
  // Чтобы получить нужный порядок (как в примере), при добавлении в очередь
  // сортируем соседей по порядку появления в исходном массиве.
  const queue: number[] = [];
  for (const card of cards) {
    if (inDegree.get(card.id) === 0) {
      queue.push(card.id);
    }
  }

  const result: number[] = [];
  while (queue.length) {
    // Извлекаем элемент из начала очереди
    const current = queue.shift()!;
    result.push(current);

    // Получаем список карточек, зависящих от current
    const neighbors = graph.get(current) || [];
    // Чтобы при наличии нескольких кандидатов порядок был предсказуемым,
    // сортируем соседей по порядку появления в исходном массиве.
    neighbors.sort((a, b) => {
      const indexA = cards.findIndex((card) => card.id === a);
      const indexB = cards.findIndex((card) => card.id === b);
      return indexA - indexB;
    });

    for (const neighbor of neighbors) {
      inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Если результат содержит меньше карточек, значит обнаружен цикл
  if (result.length !== cards.length) {
    throw new Error('Cycle detected in dependencies');
  }

  return result;
};

// Пример использования:
// @ts-ignore
const cards = [
  { id: 1, dependent: [6, 7, 8] },
  { id: 2, dependent: [6] },
  { id: 3, dependent: [] },
  { id: 4, dependent: [6, 7, 8] },
  { id: 5, dependent: [6, 8] },
  { id: 6, dependent: [] },
  { id: 7, dependent: [6] },
  { id: 8, dependent: [7] },
  { id: 9, dependent: [1] },
  { id: 10, dependent: [9] },
];

console.log(getOrderedCards(cards));
// Возможный вывод: [3, 6, 7, 8, 1, 2, 4, 5, 9, 10]
