import * as readline from 'readline';

export function nearestNumber(input: string): number {
  const inputLines = input.trim().split('\n');
  const n = parseInt(inputLines[0], 10);
  const nums = inputLines[1].split(' ');
  const target = parseInt(inputLines[2], 10);

  const sortedNums = nums.sort();
  console.log({ n, sortedNums, target });

  return 0;
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
  const result = nearestNumber(inputData);
  console.log(result);
});
