function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>(); // Для хранения индексов символов
  let left = 0; // Указатель на начало окна
  let maxLength = 0; // Длина самой длинной подстроки без повторений

  for (let right = 0; right < s.length; right++) {
    // Если символ уже есть в окне, перемещаем левый указатель
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right])! + 1);
    }

    // Обновляем индекс текущего символа
    map.set(s[right], right);

    // Вычисляем максимальную длину
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 (abc)
console.log(lengthOfLongestSubstring('bbbbb')); // 1 (b)
console.log(lengthOfLongestSubstring('pwwkew')); // 3 (wke)
