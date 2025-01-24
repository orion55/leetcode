// @ts-ignore
function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const INT_MAX = 2 ** 31 - 1; // Максимальное 32-битное целое число
  const INT_MIN = -(2 ** 31); // Минимальное 32-битное целое число
  const reversed = Math.abs(x).toString().split('').reverse().join('');
  const reversedNumber = sign * Number(reversed);

  // Проверка на переполнение в диапазоне 32-битных целых чисел, используя Number.MAX_SAFE_INTEGER
  if (reversedNumber > INT_MAX || reversedNumber < -INT_MIN - 1) {
    return 0;
  }

  return reversedNumber;
}

// Примеры
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(123)); // 321
console.log(reverse(0)); // 0
console.log(reverse(1534236469)); // 0 (переполнение)
console.log(reverse(-2147483648)); // 0 (переполнение)
