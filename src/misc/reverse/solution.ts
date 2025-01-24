// @ts-ignore
function reverse(x: number): number {
  let result = 0;
  const INT_MAX = 2 ** 31 - 1; // Максимальное 32-битное целое число
  const INT_MIN = -(2 ** 31); // Минимальное 32-битное целое число

  while (x !== 0) {
    const digit = x % 10; // Получаем последнюю цифру
    result = result * 10 + digit; // Добавляем цифру к результату

    // Проверяем переполнение
    if (result > INT_MAX || result < INT_MIN) {
      return 0; // Возвращаем 0 при переполнении
    }

    x = Math.trunc(x / 10); // Убираем последнюю цифру
  }

  return result;
}

// Примеры
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(123)); // 321
console.log(reverse(0)); // 0
console.log(reverse(1534236469)); // 0 (переполнение)
console.log(reverse(-2147483648)); // 0 (переполнение)
