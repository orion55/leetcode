class NumMatrix {
  private prefix: number[][];

  constructor(matrix: number[][]) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    this.prefix = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

    // Вычисляем префиксные суммы
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        this.prefix[i][j] = matrix[i - 1][j - 1] + this.prefix[i - 1][j] + this.prefix[i][j - 1] - this.prefix[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    // Корректируем индексы для 1-базового массива префиксов
    row1++;
    col1++;
    row2++;
    col2++;

    return this.prefix[row2][col2] - this.prefix[row1 - 1][col2] - this.prefix[row2][col1 - 1] + this.prefix[row1 - 1][col1 - 1];
  }
}

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];

const obj = new NumMatrix(matrix);
console.log(obj.sumRegion(2, 1, 4, 3)); // Вывод: 8
console.log(obj.sumRegion(1, 1, 2, 2)); // Вывод: 11
console.log(obj.sumRegion(1, 2, 2, 4)); // Вывод: 12
