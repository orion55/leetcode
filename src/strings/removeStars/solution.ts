function removeStars(s: string): string {
  const stack: string[] = [];

  for (const ch of s) {
    if (ch === '*') {
      // Удаляем последний символ, если он существует
      stack.pop();
    } else {
      // Добавляем символ в стек
      stack.push(ch);
    }
  }

  // Объединяем символы из стека в строку
  return stack.join('');
}

// Пример использования:
// @ts-ignore
const input = 'leet**cod*e';
// @ts-ignore
const result = removeStars(input);
console.log(result); // Выведет "lecoe"
