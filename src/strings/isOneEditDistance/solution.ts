function isOneEditDistance(first: string, second: string): boolean {
  const firstLen = first.length;
  const secondLen = second.length;

  // Если разница в длине строк больше чем на 1, то преобразование невозможно
  if (Math.abs(firstLen - secondLen) > 1) return false;

  let i = 0;
  let j = 0;
  let differenceFound = false;

  while (i < firstLen && j < secondLen) {
    if (first[i] !== second[j]) {
      // Если уже произошло различие, возвращаем false
      if (differenceFound) return false;
      differenceFound = true;

      // Если строки различаются по длине, сдвигаем указатель на строке с меньшей длиной
      if (firstLen > secondLen) {
        i++; // Удаление символа из первой строки
      } else if (firstLen < secondLen) {
        j++; // Вставка символа во вторую строку
      } else {
        i++; // Заменяем символ в обеих строках
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  // Если различие было найдено или строки остались с лишними символами
  return differenceFound || i < firstLen || j < secondLen;
}

// Пример 1: Удаление символа
console.log(isOneEditDistance('abc', 'ab')); // true

// Пример 2: Замена символа
console.log(isOneEditDistance('abc', 'xbc')); // true

// Пример 3: Удаление символа
console.log(isOneEditDistance('abc', 'ac')); // true

// Пример 4: Разница в длине больше чем на 1 символ
console.log(isOneEditDistance('abc', 'abac')); // false

// Пример 5: Строки одинаковые
console.log(isOneEditDistance('abc', 'abc')); // false

// Пример 6: Вставка символа
console.log(isOneEditDistance('abc', 'abcd')); // true

// Пример 7: Разница в длине больше чем на 1 символ
console.log(isOneEditDistance('abc', 'abdef')); // false
