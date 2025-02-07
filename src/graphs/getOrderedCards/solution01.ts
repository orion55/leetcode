// Итеративное удаление карточек
// @ts-ignore
type Card = {
  id: number;
  dependent: number[];
};

const getOrderedCardsIterative = (cards: Card[]): number[] => {
  // Копия исходного массива карточек для последующего удаления обработанных элементов
  const remaining = [...cards];
  // Массив для хранения итогового порядка карточек
  const result: number[] = [];

  // Функция для проверки, что все зависимости карточки уже присутствуют в результате
  const canBeProcessed = (card: Card): boolean => {
    return card.dependent.every((depId) => result.includes(depId));
  };

  // Пока остались необработанные карточки
  while (remaining.length > 0) {
    // Выбираем все карточки, для которых выполнены все зависимости
    const processable = remaining.filter((card) => canBeProcessed(card)).sort((a, b) => a.id - b.id); // Сортировка по id для детерминированного порядка

    // Если ни одна карточка не может быть обработана, обнаружена циклическая зависимость
    if (processable.length === 0) {
      throw new Error('Обнаружена циклическая зависимость');
    }

    // Добавляем выбранные карточки в результат и удаляем их из списка оставшихся
    for (const card of processable) {
      result.push(card.id);
      const index = remaining.findIndex((c) => c.id === card.id);
      remaining.splice(index, 1);
    }
  }

  return result;
};

// @ts-ignore
const cards: Card[] = [
  { id: 1, dependent: [6, 7, 8] },
  { id: 2, dependent: [6] },
  { id: 3, dependent: [] },
  { id: 4, dependent: [6, 7, 8] },
  { id: 5, dependent: [6, 8] },
  { id: 6, dependent: [] },
  { id: 7, dependent: [6] },
  { id: 8, dependent: [7] },
  { id: 9, dependent: [1] },
  { id: 10, dependent: [9] },
];

console.log(getOrderedCardsIterative(cards));
// Возможный вывод: [3, 6, 7, 8, 1, 2, 4, 5, 9, 10]
