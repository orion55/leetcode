function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
  // Множество доступных ингредиентов (изначально - supplies)
  const available = new Set<string>(supplies);

  // Граф: для каждого ингредиента хранится список рецептов, которым он нужен
  const graph = new Map<string, string[]>();

  // Словарь для подсчёта количества недостающих ингредиентов (indegree) для каждого рецепта
  const indegree = new Map<string, number>();

  // Инициализируем indegree для всех рецептов нулём
  for (const recipe of recipes) {
    indegree.set(recipe, 0);
  }

  // Строим граф зависимостей:
  // Для каждого рецепта проходим по списку ингредиентов.
  // Если ингредиент отсутствует в available, то:
  //   - увеличиваем indegree рецепта (требуется дополнительный ингредиент)
  //   - добавляем рецепт в список рецептов, зависящих от данного ингредиента
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (const ing of ingredients[i]) {
      if (!available.has(ing)) {
        indegree.set(recipe, (indegree.get(recipe) || 0) + 1);
        if (!graph.has(ing)) {
          graph.set(ing, []);
        }
        graph.get(ing)!.push(recipe);
      }
    }
  }

  // Инициализируем очередь рецептами, у которых indegree равен 0 (то есть все ингредиенты уже есть)
  const queue: string[] = [];
  for (const recipe of recipes) {
    if (indegree.get(recipe) === 0) {
      queue.push(recipe);
    }
  }

  const result: string[] = [];

  // Выполняем алгоритм Хана (топологическую сортировку)
  while (queue.length > 0) {
    const cur = queue.shift()!;
    result.push(cur);
    // После приготовления рецепта он становится доступным ингредиентом
    available.add(cur);

    // Для каждого рецепта, зависящего от текущего, уменьшаем indegree
    if (graph.has(cur)) {
      for (const next of graph.get(cur)!) {
        indegree.set(next, indegree.get(next)! - 1);
        if (indegree.get(next) === 0) {
          queue.push(next);
        }
      }
    }
  }

  return result;
}

// Примеры использования:

// Пример 1:
const recipes1 = ['bread'];
const ingredients1 = [['yeast', 'flour']];
const supplies1 = ['yeast', 'flour', 'corn'];
console.log('Пример 1:', findAllRecipes(recipes1, ingredients1, supplies1));
// Ожидаемый результат: ["bread"]

// Пример 2:
const recipes2 = ['bread', 'sandwich'];
const ingredients2 = [
  ['yeast', 'flour'],
  ['bread', 'meat'],
];
const supplies2 = ['yeast', 'flour', 'meat'];
console.log('Пример 2:', findAllRecipes(recipes2, ingredients2, supplies2));
// Ожидаемый результат: ["bread", "sandwich"]

// Пример 3:
const recipes3 = ['bread', 'sandwich', 'burger'];
const ingredients3 = [
  ['yeast', 'flour'],
  ['bread', 'meat'],
  ['sandwich', 'meat', 'bread'],
];
const supplies3 = ['yeast', 'flour', 'meat'];
console.log('Пример 3:', findAllRecipes(recipes3, ingredients3, supplies3));
// Ожидаемый результат: ["bread", "sandwich", "burger"]
