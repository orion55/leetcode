/**
 * Функция totalFruit возвращает максимальное количество фруктов,
 * которые можно собрать, имея два корзины для двух типов фруктов.
 *
 * @param fruits - массив, где каждый элемент представляет тип фрукта.
 * @returns максимальное количество собранных фруктов.
 */
function totalFruit(fruits: number[]): number {
  // Map для хранения текущего количества фруктов каждого типа в "окне"
  const basket = new Map<number, number>();

  let left = 0; // Левая граница окна
  let maxFruits = 0; // Максимальное количество фруктов, которое можно собрать

  // Проходим по массиву с правой границей окна (right)
  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right];
    // Добавляем текущий фрукт в Map или увеличиваем его количество
    basket.set(fruit, (basket.get(fruit) || 0) + 1);

    // Если в Map больше двух типов фруктов, сдвигаем левую границу
    while (basket.size > 2) {
      const leftFruit = fruits[left];
      basket.set(leftFruit, basket.get(leftFruit)! - 1);
      // Если количество фрукта становится 0, удаляем его из Map
      if (basket.get(leftFruit) === 0) {
        basket.delete(leftFruit);
      }
      left++;
    }
    // Обновляем максимальное количество фруктов
    maxFruits = Math.max(maxFruits, right - left + 1);
  }
  return maxFruits;
}

// Пример использования:
const fruitsExample = [1, 2, 1, 2, 3];
console.log(totalFruit(fruitsExample)); // Ожидаемый результат: 4
