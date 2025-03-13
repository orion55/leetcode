// Класс TrieNode описывает узел Trie.
class TrieNode {
  children: { [key: string]: TrieNode };
  suggestions: string[];

  constructor() {
    this.children = {};
    this.suggestions = [];
  }
}

// Функция для вставки продукта в Trie.
function insert(root: TrieNode, product: string): void {
  let node = root;
  for (const char of product) {
    // Если узел для символа не существует, создаём его.
    if (!(char in node.children)) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
    // Добавляем продукт в список подсказок, если их меньше 3.
    if (node.suggestions.length < 3) {
      node.suggestions.push(product);
    }
  }
}

// Основная функция для получения подсказок по заданному searchWord.
function suggestedProducts(products: string[], searchWord: string): string[][] {
  // Сортируем массив продуктов лексикографически.
  products.sort();

  // Строим Trie, вставляя каждый продукт.
  const root = new TrieNode();
  for (const product of products) {
    insert(root, product);
  }

  const result: string[][] = [];
  let node: TrieNode | undefined = root;

  // Проходим по каждому символу строки searchWord.
  for (const char of searchWord) {
    // Если текущий узел существует, переходим к следующему узлу по символу.
    if (node) {
      node = node.children[char];
    }
    // Если узел найден, добавляем подсказки, иначе — пустой массив.
    if (node) {
      result.push(node.suggestions);
    } else {
      result.push([]);
    }
  }

  return result;
}

// Пример 1
const products1 = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
const searchWord1 = 'mouse';
console.log('Результат для searchWord =', searchWord1);
console.log(suggestedProducts(products1, searchWord1));

/* Ожидаемый вывод:
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/

// Пример 2
const products2 = ['bags', 'baggage', 'banner', 'box', 'cloths'];
const searchWord2 = 'bags';
console.log('Результат для searchWord =', searchWord2);
console.log(suggestedProducts(products2, searchWord2));

/* Ожидаемый вывод:
[
  ["baggage", "bags", "banner"],
  ["baggage", "bags", "banner"],
  ["baggage", "bags"],
  ["bags"]
]
*/
