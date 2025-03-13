function removeDuplicates(s: string): string {
  const stack: string[] = [];

  // Проходим по каждому символу строки
  for (const char of s) {
    // Если стек не пуст и текущий символ равен последнему в стеке, удаляем последний элемент
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      // Иначе добавляем символ в стек
      stack.push(char);
    }
  }

  // Объединяем элементы стека в строку и возвращаем результат
  return stack.join('');
}

// Пример использования
// @ts-ignore
const input = 'abbaca';
console.log(removeDuplicates(input)); // Ожидаемый вывод: "ca"
