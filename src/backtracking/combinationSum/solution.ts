function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, currentCombination: number[], sum: number) {
    if (sum === target) {
      result.push([...currentCombination]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      backtrack(i, currentCombination, sum + candidates[i]); // берем i, потому что можно повторять
      currentCombination.pop(); // откат назад
    }
  }

  backtrack(0, [], 0);
  return result;
}

// Пример использования
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2], [2,3,3], [3,5]]
