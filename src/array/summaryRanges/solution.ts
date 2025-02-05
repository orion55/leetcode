function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];

  if (nums.length === 0) return result;

  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    // Если текущий элемент подряд с предыдущим
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      // Если нет, добавляем диапазон в результат
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }

      // Обновляем новый диапазон
      if (i < nums.length) {
        start = nums[i];
        end = nums[i];
      }
    }
  }

  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// Output: ["0->2", "4->5", "7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// Output: ["0", "2->4", "6", "8->9"]
console.log(summaryRanges([1, 3, 5, 7]));
// Output: ["1", "3", "5", "7"]
console.log(summaryRanges([1, 2, 3, 4, 5]));
// Output: ["1->5"]
console.log(summaryRanges([1, 2, 3, 5, 6, 8, 9, 10]));
// Output: ["1->3", "5->6", "8->10"]
