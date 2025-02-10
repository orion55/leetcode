function findMaxProduct(numbers) {
  let max1 = -Infinity,
    max2 = -Infinity; // два наибольших числа
  let min1 = Infinity,
    min2 = Infinity; // два наименьших числа

  // Проходим по всему списку
  for (let num of numbers) {
    // Обновляем два наибольших числа
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }

    // Обновляем два наименьших числа
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  // Сравниваем произведения и выводим пару с максимальным произведением
  const product1 = max1 * max2;
  const product2 = min1 * min2;

  if (product1 > product2) {
    console.log(max2, max1); // Выводим наибольшее произведение
  } else {
    console.log(min1, min2); // Выводим наименьшее произведение
  }
}

findMaxProduct([4, 3, 5, 2, 5]);
//[5,5]
findMaxProduct([-4, 3, -5, 2, 5]);
//[-5, -4];
