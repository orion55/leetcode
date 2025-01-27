function frequencySort(s: string): string {
  // Подсчет частоты символов
  const freqMap: Map<string, number> = new Map();
  for (const char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Сортировка символов по частоте
  const sortedChars = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

  // Сборка результата
  let result = '';
  for (const [char, freq] of sortedChars) {
    result += char.repeat(freq);
  }

  return result;
}

// Пример использования
console.log(frequencySort('tree')); // "eert" или "eetr"
console.log(frequencySort('cccaaa')); // "cccaaa" или "aaaccc"
console.log(frequencySort('Aabb')); // "bbAa" или "bbaA"
