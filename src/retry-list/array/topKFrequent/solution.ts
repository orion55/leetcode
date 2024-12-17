function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap: Map<number, number> = new Map();

  // Шаг 1: Подсчёт частоты элементов
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Шаг 2: Сортировка элементов по их частоте
  const sortedElements = Array.from(frequencyMap.keys()).sort((a, b) => {
    return (frequencyMap.get(b) as number) - (frequencyMap.get(a) as number);
  });
  // Шаг 3: Возврат топ-k элементов
  return sortedElements.slice(0, k);
}

// Пример использования:
console.log(topKFrequent([1, 1, 1, 2, 2, 2, 2, 3], 2)); // Вывод: [1, 2]
console.log(topKFrequent([1], 1)); // Вывод: [1]
