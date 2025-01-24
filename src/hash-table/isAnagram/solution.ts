function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const hashTable: { [key: string]: number } = {};

  // Проходим по первой строке и увеличиваем счетчик для каждого символа
  for (const char of s) {
    hashTable[char] = (hashTable[char] || 0) + 1;
  }

  // Проходим по второй строке и уменьшаем счетчик для каждого символа
  for (const char of t) {
    if (!hashTable[char]) {
      return false; // Если символ не найден или его количество отрицательное, это не анаграмма
    }
    hashTable[char]--;
  }

  // Все проверки пройдены, строки — анаграммы
  return true;
}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
