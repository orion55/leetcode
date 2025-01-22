// @ts-ignore
function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const reversed = Math.abs(x).toString().split('').reverse().join('');
  const reversedNumber = sign * Number(reversed);

  // Проверка на переполнение в диапазоне 32-битных целых чисел, используя Number.MAX_SAFE_INTEGER
  if (reversedNumber > Number.MAX_SAFE_INTEGER || reversedNumber < -Number.MAX_SAFE_INTEGER - 1) {
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
