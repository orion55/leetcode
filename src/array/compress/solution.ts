function compress(chars: string[]): number {
  let writeIndex = 0; // Индекс для записи в chars
  let readIndex = 0; // Индекс для чтения символов

  while (readIndex < chars.length) {
    const currentChar = chars[readIndex];
    let count = 0;

    // Считаем сколько раз текущий символ повторяется подряд
    while (readIndex < chars.length && chars[readIndex] === currentChar) {
      readIndex++;
      count++;
    }

    // Записываем символ
    chars[writeIndex++] = currentChar;

    // Если символ повторяется больше одного раза, записываем количество
    if (count > 1) {
      for (const digit of count.toString()) {
        chars[writeIndex++] = digit;
      }
    }
  }

  return writeIndex; // Возвращаем новый размер массива
}

// Примеры

// Пример 1
const chars1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
const newLength1 = compress(chars1);
console.log(chars1.slice(0, newLength1)); // Вывод: ["a", "2", "b", "2", "c", "3"]

// Пример 2
const chars2 = ['a', 'b', 'c'];
const newLength2 = compress(chars2);
console.log(chars2.slice(0, newLength2)); // Вывод: ["a", "b", "c"]

// Пример 3
const chars3 = ['a', 'a', 'a', 'a', 'b', 'b', 'a', 'a'];
const newLength3 = compress(chars3);
console.log(chars3.slice(0, newLength3)); // Вывод: ["a", "4", "b", "2", "a", "2"]

// Пример 4
const chars4 = ['a'];
const newLength4 = compress(chars4);
console.log(chars4.slice(0, newLength4)); // Вывод: ["a"]
