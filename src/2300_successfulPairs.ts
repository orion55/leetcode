// 2300. Successful Pairs of Spells and Potions https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/

export const solution = () => {
  function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const res = [];

    const sortedPotions = potions.sort((a, b) => a - b);
    for (const spell of spells) {
      res.push(binarySearch(spell, sortedPotions, success));
    }
    return res;
  }

  function binarySearch(spell: number, potions: number[], success: number): number {
    let start = 0;
    let end = potions.length - 1;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      const enhancedPotion = spell * potions[middle];
      if (enhancedPotion < success) {
        start = middle + 1;
      } else if (enhancedPotion >= success) {
        end = middle - 1;
      }
    }

    return potions.length - start;
  }

  console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
  console.log(successfulPairs([3, 1, 2], [8, 5, 8], 7));
};
