function isValid(s: string): boolean {
  // Стек для хранения открывающих скобок
  const stack: string[] = [];

  // Словарь соответствий скобок
  const bracketsMap: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // Перебираем символы строки
  for (const char of s) {
    if (bracketsMap[char]) {
      // Если это открывающая скобка, кладем в стек
      stack.push(char);
    } else {
      // Если это закрывающая скобка, проверяем стек
      const last = stack.pop();
      if (bracketsMap[last!] !== char) {
        return false; // Несоответствие скобок
      }
    }
  }

  // Если стек пустой, все скобки закрыты правильно
  return stack.length === 0;
}

// Примеры для проверки
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
