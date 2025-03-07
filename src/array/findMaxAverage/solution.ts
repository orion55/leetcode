function findMaxAverage(nums: number[], k: number): number {
  let begin = 0;
  let window_state = 0;
  let result = Number.NEGATIVE_INFINITY;

  for (let end = 0; end < nums.length; end++) {
    // Добавляем текущий элемент к сумме окна
    window_state += nums[end];

    // Считаем размер текущего окна
    let window_size = end - begin + 1;

    // Пока окно достигло требуемого размера k
    while (window_size === k) {
      // Обновляем максимальную сумму (а следовательно и среднее)
      result = Math.max(result, window_state);

      // «Сдвигаем» окно: вычитаем элемент с левой границы
      window_state -= nums[begin];
      begin++;

      // Пересчитываем размер окна после сдвига
      window_size = end - begin + 1;
    }
  }

  return result / k;
}

// Пример использования:
// @ts-ignore
const arr = [1, 12, -5, -6, 50, 3];
// @ts-ignore
const k = 4;
console.log('Максимальное среднее значение:', findMaxAverage(arr, k));
// Ожидаемый вывод: 12.75
