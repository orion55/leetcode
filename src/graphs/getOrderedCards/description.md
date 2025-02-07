# Цепочка зависимостей графа

Есть код «
```
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

const getOrderedCards = (cards) => {

};

console.log(getOrderedCards(cards));
// [3, 6, 7, 8, 1, 2, 4, 5, 9, 10]
``` 
В нём одни карточки зависят от других напиши функцию, чтобы карточки выводились 
по цепочке в порядке зависимости.