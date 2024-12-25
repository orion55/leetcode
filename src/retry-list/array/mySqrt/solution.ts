function mySqrt(x: number): number {
  if (x < 2) return x; // Для 0 и 1 результат равен самому числу.

  let left = 1;
  let right = x;

  const good = (mid: number, x: number): boolean => {
    return mid * mid <= x;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (good(mid, x)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Если точного квадрата нет, возвращаем ближайшее целое число (нижнюю границу).
  return right;
}

// Пример использования:
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
