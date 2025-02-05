function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length === 0) return [];
  const result: number[] = [];
  const deque: number[] = []; // Индексы элементов массива, хранящиеся в очереди

  for (let i = 0; i < nums.length; i++) {
    // Удаляем индексы элементов, которые уже вышли за пределы окна
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Удаляем все элементы из конца deque, которые меньше текущего элемента
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Добавляем текущий элемент в deque
    deque.push(i);

    // Когда мы достигли размера окна, добавляем максимальный элемент (nums[deque[0]])
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// @ts-ignore
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
// @ts-ignore
const k = 3;
console.log(maxSlidingWindow(nums, k)); // [3, 3, 5, 5, 6, 7]
