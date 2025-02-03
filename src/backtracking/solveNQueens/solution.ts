function solveNQueens(n: number): string[][] {
  const results: string[][] = [];
  const board: string[] = Array(n).fill('.'.repeat(n));
  const cols = new Set<number>(); // Запрещенные столбцы
  const diag1 = new Set<number>(); // Главные диагонали (row - col)
  const diag2 = new Set<number>(); // Побочные диагонали (row + col)

  function backtrack(row: number): void {
    if (row === n) {
      results.push([...board]); // Добавляем копию доски в результаты
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

      // Устанавливаем ферзя
      board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      // Рекурсивный вызов для следующей строки
      backtrack(row + 1);

      // Откатываем изменения
      board[row] = '.'.repeat(n);
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);
  return results;
}

// Пример вызова
console.log(solveNQueens(4));
