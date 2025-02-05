function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false; // Если s1 длиннее, чем s2, сразу возвращаем false
  }

  // Частотный словарь для символов s1
  const s1Freq: number[] = Array(26).fill(0);
  const s2Freq: number[] = Array(26).fill(0);

  // Заполняем частотный словарь для s1
  for (const char of s1) {
    s1Freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Заполняем начальный частотный словарь для первого окна в s2
  for (let i = 0; i < s1.length; i++) {
    s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  // Если в начале первое окно уже является перестановкой
  if (s1Freq.every((count, index) => count === s2Freq[index])) {
    return true;
  }

  // Двигаем окно по s2
  for (let i = s1.length; i < s2.length; i++) {
    // Убираем символ в левом краю окна
    s2Freq[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
    // Добавляем символ в правом краю окна
    s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;

    // Сравниваем частотные массивы
    if (s1Freq.every((count, index) => count === s2Freq[index])) {
      return true;
    }
  }

  return false; // Если не нашли ни одной перестановки
}

// Примеры:
console.log(checkInclusion('ab', 'eidbaooo')); // true
console.log(checkInclusion('ab', 'eidboaoo')); // false
console.log(checkInclusion('abc', 'ccccbbbbaaaa')); // false
console.log(checkInclusion('ab', 'ba')); // true
console.log(checkInclusion('xyz', 'xyzzzz')); // true
