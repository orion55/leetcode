// @ts-ignore
function singleNumber(nums: number[]): number {
  let ones = 0; // Числа, которые встречаются один раз
  let twos = 0; // Числа, которые встречаются два раза

  for (const num of nums) {
    // Обновляем twos: добавляем в него числа из ones, которые повторились снова
    twos |= ones & num;

    // Обновляем ones: добавляем текущий элемент
    ones ^= num;

    // Числа, которые появились три раза, нужно удалить из ones и twos
    const threes = ones & twos;
    ones &= ~threes;
    twos &= ~threes;
  }

  return ones;
}

// Пример использования:
// @ts-ignore
const nums = [2, 2, 3, 2];
console.log(singleNumber(nums)); // Ожидается: 3
