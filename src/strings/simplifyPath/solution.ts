function simplifyPath(path: string): string {
  const stack: string[] = [];
  // Разбиваем строку пути по символу '/'
  const parts = path.split('/');

  for (const part of parts) {
    // Пропускаем пустые строки и одиночные точки, обозначающие текущую директорию
    if (part === '' || part === '.') continue;

    // Если встречаем две точки, возвращаемся на уровень вверх (если стек не пуст)
    if (part === '..') {
      if (stack.length) {
        stack.pop();
      }
    } else {
      // Иначе добавляем имя директории в стек
      stack.push(part);
    }
  }

  // Собираем упрощённый путь, начиная с корневого '/'
  return '/' + stack.join('/');
}

// Пример использования:
console.log(simplifyPath('/a/./b/../../c')); // "/c"
console.log(simplifyPath('/../')); // "/"
console.log(simplifyPath('/home//foo/')); // "/home/foo"
