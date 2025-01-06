// @ts-ignore
function moveZeroes(nums: number[]): void {
  const nonZeroes = nums.filter((num) => num !== 0); // Создаем новый массив без нулей
  const zeroes = new Array(nums.length - nonZeroes.length).fill(0); // Заполняем массив нулями

  // Перезаписываем nums с ненулевыми элементами и нулями
  nums.length = 0; // Очищаем исходный массив
  nums.push(...nonZeroes, ...zeroes); // Добавляем ненулевые элементы и нули
}

// @ts-ignore
const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Выведет: [1, 3, 12, 0, 0]
