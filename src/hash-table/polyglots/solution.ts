import * as readline from 'readline';

export function polyglots(input: string): string {
  const inputLines = input.trim().split('\n');

  const languagesMap = new Map<string, number>();
  let line = 0;
  const n = parseInt(inputLines[line++], 10);
  for (let i = 1; i <= n; i++) {
    const count = parseInt(inputLines[line++], 10);
    for (let j = 1; j <= count; j++) {
      const language = String(inputLines[line++]);
      if (languagesMap.has(language)) {
        languagesMap.set(language, languagesMap.get(language)! + 1);
      } else {
        languagesMap.set(language, 1);
      }
    }
  }
  // Языки, которые знают все школьники
  const allKnowLanguages = [...languagesMap].filter(([_, count]) => count === n).map(([language]) => language);

  // Языки, которые знает хотя бы один школьник
  const atLeastOneKnowsLanguages = [...languagesMap].map(([language]) => language);

  // Формируем строку вывода
  let result = `${allKnowLanguages.length}\n`;
  result += allKnowLanguages.join('\n') + '\n';
  result += `${atLeastOneKnowsLanguages.length}\n`;
  result += atLeastOneKnowsLanguages.join('\n');

  return result;
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
  const result = polyglots(inputData);
  console.log(result);
});
