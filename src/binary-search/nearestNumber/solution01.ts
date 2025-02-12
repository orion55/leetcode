import * as readline from 'readline';

export function nearestNumber(input: string): string {
  const inputLines = input.trim().split('\n');
  const nums = inputLines[1].split(' ').map(Number);
  const target = parseInt(inputLines[2], 10);

  let nearest = nums[0];
  let minDifference = Math.abs(target - nearest);

  for (let i = 1; i < nums.length; i++) {
    const difference = Math.abs(target - nums[i]);
    if (difference < minDifference) {
      nearest = nums[i];
      minDifference = difference;
    }
  }

  return String(nearest);
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
