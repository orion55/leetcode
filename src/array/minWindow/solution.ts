function minWindow(s: string, t: string): string {
  if (s.length < t.length) return '';

  // Мапы для подсчета частоты символов в t и в текущем окне s
  const tMap: Map<string, number> = new Map();
  const windowMap: Map<string, number> = new Map();

  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  let left = 0,
    right = 0,
    minLen = Infinity,
    minStart = 0,
    matched = 0;

  while (right < s.length) {
    // Расширяем окно с правой стороны
    const rightChar = s[right];
    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

    // Если символ из t входит в окно с нужной частотой, увеличиваем счетчик matched
    if (windowMap.get(rightChar)! <= tMap.get(rightChar)!) {
      matched++;
    }

    // Когда все символы найдены, пытаемся сжать окно
    while (matched === t.length) {
      const windowLength = right - left + 1;
      if (windowLength < minLen) {
        minLen = windowLength;
        minStart = left;
      }

      // Сжимаем окно с левой стороны
      const leftChar = s[left];
      windowMap.set(leftChar, windowMap.get(leftChar)! - 1);
      if (windowMap.get(leftChar)! < tMap.get(leftChar)!) {
        matched--;
      }
      left++;
    }

    // Сдвигаем правый указатель
    right++;
  }

  // Если минимальная длина не была обновлена, значит подстрока не найдена
  return minLen === Infinity ? '' : s.slice(minStart, minStart + minLen);
}

console.log(minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
