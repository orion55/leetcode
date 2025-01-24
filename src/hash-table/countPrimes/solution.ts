function countPrimes(n: number): number {
  if (n <= 2) return 0; // Простых чисел меньше 2 нет

  const sieve: boolean[] = new Array(n).fill(true); // Инициализируем массив, все числа считаются простыми
  sieve[0] = sieve[1] = false; // 0 и 1 не простые числа

  // Алгоритм решета Эратосфена
  for (let i = 2; i * i < n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < n; j += i) {
        sieve[j] = false; // Отметить все кратные i как составные
      }
    }
  }

  // Подсчитываем количество простых чисел
  return sieve.filter((isPrime) => isPrime).length;
}

console.log(countPrimes(10)); // Вывод: 4 (простые числа: 2, 3, 5, 7)
console.log(countPrimes(30)); // Вывод: 10 (простые числа: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29)
