function removeElement(nums: number[], val: number): number {
  let i = 0; // указатель для новой позиции
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]; // копируем элемент, если он не равен val
      i++;
    }
  }
  return i;
}

// @ts-ignore
const nums = [3, 2, 2, 3];
const val = 3;
const newLength = removeElement(nums, val);
console.log(`Новая длина массива: ${newLength}`); // Вывод: 2
console.log(`Изменённый массив: ${nums.slice(0, newLength)}`); // Вывод: [2, 2]
