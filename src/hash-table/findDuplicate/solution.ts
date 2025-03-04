// @ts-ignore
function findDuplicate(nums: number[]): number {
  const countMap = new Map<number, number>();

  nums.forEach((num: number) => {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num)! + 1);
    } else {
      countMap.set(num, 1);
    }
  });

  // eslint-disable-next-line no-unused-vars
  const arr = Array.from(countMap.entries()).find(([_, count]) => count > 1);
  return arr?.[0] ?? 0;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));

console.log(findDuplicate([3, 1, 3, 4, 2]));

console.log(findDuplicate([3, 3, 3, 3, 3]));
