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

  const letterSets = digits.split('').map((digit) => phoneMap[digit]);
  const total = letterSets.reduce((prod, set) => prod * set.length, 1);

  const result: string[] = [];

  for (let i = 0; i < total; i++) {
    let index = i;
    let combination = '';

    for (const set of letterSets) {
      combination += set[index % set.length];
      index = Math.floor(index / set.length);
    }

    result.push(combination);
  }

  return result;
}

// Тестируем
console.log(letterCombinations('23'));
// Ожидаемый результат: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
