function isThree(n: number): boolean {
  // Находим корень из n
  const root = Math.sqrt(n);

  // Проверяем, является ли n квадратом
  if (!Number.isInteger(root)) {
    return false;
  }

  // Проверяем, является ли корень простым числом
  return isPrime(root);
}

// Вспомогательная функция для проверки, является ли число простым
function isPrime(num: number): boolean {
  if (num < 2) return false;

  // Проверяем делители от 2 до sqrt(num)
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Пример использования:
console.log(isThree(4)); // true
console.log(isThree(9)); // true
console.log(isThree(10)); // false
console.log(isThree(16)); // false
