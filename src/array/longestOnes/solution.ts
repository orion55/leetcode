function longestOnes(nums: number[], k: number): number {
  let begin = 0;
  let window_state = 0; // Количество нулей в текущем окне
  let result = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      window_state++;
    }

    while (window_state > k) {
      if (nums[begin] === 0) {
        window_state--;
      }
      begin++;
    }

    const window_size = end - begin + 1;
    result = Math.max(result, window_size);
  }

  return result;
}

// Примеры проверки
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // Ожидается 6
console.log(longestOnes([1, 0, 1, 1, 0, 1], 1)); // Ожидается 4
console.log(longestOnes([1, 1, 1], 0)); // Ожидается 3
console.log(longestOnes([0, 0, 1, 1, 0, 1], 2)); // Ожидается 5
