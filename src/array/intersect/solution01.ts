// @ts-ignore
function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  const result: number[] = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }

  return result;
}

// @ts-ignore
const nums1 = [4, 9, 5];
// @ts-ignore
const nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));
// Ожидаемый вывод: [4, 9]
