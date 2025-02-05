function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>(); // Для хранения символов в текущем окне
  let left = 0; // Левый указатель
  let maxLength = 0; // Максимальная длина подстроки без повторений

  for (let right = 0; right < s.length; right++) {
    // Пока символ в set уже есть, сдвигаем левый указатель
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    // Добавляем текущий символ в set
    set.add(s[right]);

    // Обновляем максимальную длину
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 (abc)
console.log(lengthOfLongestSubstring('bbbbb')); // 1 (b)
console.log(lengthOfLongestSubstring('pwwkew')); // 3 (wke)
