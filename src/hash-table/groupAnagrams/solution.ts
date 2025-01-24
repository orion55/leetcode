function groupAnagrams(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};

  for (const str of strs) {
    // Сортируем строку и используем отсортированную строку как ключ
    const key = str.split('').sort().join('');

    // Если ключ не существует, создаем новую группу
    if (!map[key]) {
      map[key] = [];
    }

    // Добавляем текущее слово в соответствующую группу
    map[key].push(str);
  }

  // Возвращаем все группы
  return Object.values(map);
}

const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// @ts-ignore
const result = groupAnagrams(words);
console.log(result);
