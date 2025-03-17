function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  // Рекурсивная функция для построения комбинаций
  function backtrack(start: number, combination: number[]): void {
    // Если длина текущей комбинации равна k, сохраняем её в результате
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }
    // Перебираем числа от start до n
    for (let i = start; i <= n; i++) {
      // Добавляем текущее число в комбинацию
      combination.push(i);
      // Рекурсивно продолжаем добавлять числа, начиная с i+1
      backtrack(i + 1, combination);
      // Убираем последнее число для возврата к предыдущему состоянию (backtracking)
      combination.pop();
    }
  }

  // Запускаем рекурсию с начального числа 1
  backtrack(1, []);
  return result;
}

// Пример использования:
const n = 4;
// @ts-ignore
const k = 2;
console.log(combine(n, k));
// Ожидаемый вывод: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
