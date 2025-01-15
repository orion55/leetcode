function minRemoveToMakeValid(s: string): string {
  const stack: number[] = []; // Для хранения индексов открывающих скобок
  const toRemove: Set<number> = new Set(); // Индексы скобок, которые нужно удалить

  // Первый проход: определяем индексы несоответствующих скобок
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') {
      stack.push(i); // Сохраняем индекс открывающей скобки
    } else if (char === ')') {
      if (stack.length > 0) {
        stack.pop(); // Закрываем последнюю незакрытую скобку
      } else {
        toRemove.add(i); // Запоминаем индекс лишней закрывающей скобки
      }
    }
  }

  // Добавляем оставшиеся открывающие скобки в список для удаления
  while (stack.length > 0) {
    toRemove.add(stack.pop()!);
  }

  // Второй проход: строим итоговую строку, исключая ненужные символы
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (!toRemove.has(i)) {
      result += s[i];
    }
  }

  return result;
}

// Пример использования
const input = 'lee(t(c)o)de)';
const output = minRemoveToMakeValid(input);
console.log(output); // Ожидаемый результат: "lee(t(c)o)de"
