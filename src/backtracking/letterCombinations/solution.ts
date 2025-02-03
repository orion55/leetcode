// @ts-ignore
function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const phoneMap: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  const result: string[] = [];

  function backtrack(index: number, path: string) {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    for (const letter of phoneMap[digits[index]]) {
      backtrack(index + 1, path + letter);
    }
  }

  backtrack(0, '');
  return result;
}

// Тестируем
console.log(letterCombinations('239'));
// Ожидаемый результат: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
