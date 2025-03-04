// @ts-ignore
function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  // Первый этап: поиск точки пересечения
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Второй этап: нахождение начала цикла (дубликата)
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));

console.log(findDuplicate([3, 1, 3, 4, 2]));

console.log(findDuplicate([3, 3, 3, 3, 3]));
