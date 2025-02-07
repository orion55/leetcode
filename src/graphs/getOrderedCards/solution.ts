// @ts-ignore
type Card = {
  id: number;
  dependent: number[];
};

// @ts-ignore
const getOrderedCards = (cards: Card[]): number[] => {
  // Для быстрого поиска карточки по id
  const cardMap = new Map<number, Card>();
  cards.forEach((card) => cardMap.set(card.id, card));

  const visited = new Set<number>();
  const result: number[] = [];

  // Рекурсивная функция обхода, которая сначала обрабатывает зависимости
  const dfs = (card: Card): void => {
    if (visited.has(card.id)) return;
    // Для каждой зависимости получаем соответствующую карточку и обходим её
    for (const depId of card.dependent) {
      const depCard = cardMap.get(depId);
      if (depCard) {
        dfs(depCard);
      }
    }
    visited.add(card.id);
    result.push(card.id);
  };

  // Сначала обрабатываем карточки без зависимостей (dependent.length === 0),
  // затем остальные. При этом сортировка по id гарантирует, что базовые карточки
  // будут инициировать обход в нужном порядке.
  const sortedCards = [...cards].sort((a, b) => {
    if (a.dependent.length === 0 && b.dependent.length > 0) return -1;
    if (a.dependent.length > 0 && b.dependent.length === 0) return 1;
    return a.id - b.id;
  });

  // Инициируем обход по отсортированному списку
  for (const card of sortedCards) {
    dfs(card);
  }

  return result;
};

// @ts-ignore
const cards = [
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

console.log(getOrderedCards(cards));
// Ожидаемый вывод: [3, 6, 7, 8, 1, 2, 4, 5, 9, 10]
