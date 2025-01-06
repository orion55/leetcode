// @ts-ignore
function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0;

  // Перебираем массив и сдвигаем ненулевые элементы в начало
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      // избежать ненужного перезаписывания элемента на его собственное место
      if (i !== nonZeroIndex) {
        nums[i] = 0;
      }
      nonZeroIndex++;
    }
  }
}

// @ts-ignore
const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Выведет: [1, 3, 12, 0, 0]
