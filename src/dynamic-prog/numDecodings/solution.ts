function numDecodings(s: string): number {
  if (!s || s[0] === '0') return 0;

  const n: number = s.length;
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] !== '0' ? 1 : 0;

  for (let i = 2; i <= n; i++) {
    // Проверка одного символа
    const oneDigit: number = Number(s.substring(i - 1, i));
    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    // Проверка двух символов
    const twoDigit: number = Number(s.substring(i - 2, i));
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

console.log(numDecodings('12'));
// Выведет 2, так как "12" можно декодировать как "AB" (1,2) и "L" (12)

console.log(numDecodings('226'));
// Выведет 3, так как "226" можно декодировать как "BBF" (2,2,6), "BZ" (2,26) и "VF" (22,6)

console.log(numDecodings('0'));
// Выведет 0, так как строка не может начинаться с '0'

console.log(numDecodings('10'));
// Выведет 1, так как "10" можно декодировать только как "J" (10)
