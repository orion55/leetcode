function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;

  // Создаем матрицу (m+1) x (n+1)
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Инициализация: преобразование пустой строки в строку длины j требует j операций вставки
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // преобразование строки длины i в пустую требует i операций удаления
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // Заполнение матрицы dp
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // Если символы совпадают, операция не требуется
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Выбираем минимальное количество операций среди:
        // - удаление символа из word1,
        // - вставка символа в word1,
        // - замена символа.
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], // удаление
            dp[i][j - 1], // вставка
            dp[i - 1][j - 1], // замена
          );
      }
    }
  }

  return dp[m][n];
}

// Пример использования:
const str1 = 'kitten';
const str2 = 'sitting';
console.log(`Edit Distance между '${str1}' и '${str2}' = `, minDistance(str1, str2));
