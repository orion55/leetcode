import * as readline from 'readline';

export function nearestNumber(input: string): string {
  const inputLines = input.trim().split('\n');
  // const n = parseInt(inputLines[0], 10);
  const nums = inputLines[1]
    .split(' ')
    .map(Number)
    .filter((n) => !isNaN(n));
  const target = parseInt(inputLines[2], 10);

  const sortedNums = nums.sort();

  let left = 0;
  let right = sortedNums.length - 1;

  function good(index: number): boolean {
    return sortedNums[index] === target;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (good(mid)) return String(sortedNums[mid]);

    if (sortedNums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return String(sortedNums[right]);
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
