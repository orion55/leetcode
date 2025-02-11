import * as readline from 'readline';

// Функция для обработки синонимов
export function processSynonyms(input: string): string {
  const inputLines = input.trim().split('\n');

  const synonymsMap = new Map<string, string>();
  const N = parseInt(inputLines[0], 10); // Читаем количество пар синонимов

  for (let i = 1; i <= N; i++) {
    const [word1, word2] = inputLines[i].split(' ');
    synonymsMap.set(word1, word2);
    synonymsMap.set(word2, word1);
  }

  // Последнее слово для поиска синонима
  const searchWord = inputLines[N + 1];

  if (synonymsMap.has(searchWord)) {
    return synonymsMap.get(searchWord) || '';
  } else {
    return 'Синоним не найден';
  }
}

// Функция для чтения данных с консоли
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputData = '';
rl.on('line', (line) => {
  inputData += line + '\n';
});

rl.on('close', () => {
  const result = processSynonyms(inputData);
  console.log(result);
});
