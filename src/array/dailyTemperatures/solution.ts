function dailyTemperatures(temperatures: number[]): number[] {
  // Результирующий массив, заполненный нулями
  const result: number[] = new Array(temperatures.length).fill(0);
  // Стек хранит индексы тех дней, для которых еще не найдены более теплые дни. Он работает как "ожидание" для каждого дня.
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    // Пока стек не пуст и текущая температура больше температуры на вершине стека
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      // Если текущая температура выше, чем у дня на вершине стека, то мы нашли более теплый день, и этот день можно исключить из стека.
      const prevIndex = stack.pop()!;
      // Записываем разницу индексов в результат
      result[prevIndex] = i - prevIndex;
    }
    // Добавляем текущий индекс в стек
    stack.push(i);
  }

  return result;
}

// Пример использования:
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log('Final Result:', dailyTemperatures(temperatures));
