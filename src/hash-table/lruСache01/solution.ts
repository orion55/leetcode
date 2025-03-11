// Класс узла двухсвязного списка, который хранит ключ и значение
class DoublyLinkedNode {
  key: number;
  value: number;
  prev: DoublyLinkedNode | null;
  next: DoublyLinkedNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Класс LRUCache, реализующий кэш с ограниченной ёмкостью
// @ts-ignore
class LRUCache {
  private readonly capacity: number;
  private cache: Map<number, DoublyLinkedNode>;
  private readonly head: DoublyLinkedNode; // фиктивная голова списка
  private readonly tail: DoublyLinkedNode; // фиктивный хвост списка

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();

    // Инициализируем фиктивные узлы для упрощения операций вставки и удаления
    this.head = new DoublyLinkedNode(0, 0);
    this.tail = new DoublyLinkedNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Удаляет узел из списка
  private removeNode(node: DoublyLinkedNode): void {
    const prevNode = node.prev;
    const nextNode = node.next;
    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
    }
  }

  // Добавляет узел сразу после фиктивной головы
  private addToHead(node: DoublyLinkedNode): void {
    node.prev = this.head;
    node.next = this.head.next;
    if (this.head.next) {
      this.head.next.prev = node;
    }
    this.head.next = node;
  }

  // Перемещает существующий узел в начало (после головы)
  private moveToHead(node: DoublyLinkedNode): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  // Удаляет наименее недавно использованный узел (до фиктивного хвоста) и возвращает его
  private removeTail(): DoublyLinkedNode | null {
    const node = this.tail.prev;
    if (node && node !== this.head) {
      this.removeNode(node);
      return node;
    }
    return null;
  }

  // Метод get: возвращает значение по ключу, если узел найден, и перемещает его в начало списка
  get(key: number): number {
    const node = this.cache.get(key);
    if (!node) return -1;
    this.moveToHead(node);
    return node.value;
  }

  // Метод put: добавляет или обновляет значение по ключу,
  // если кэш превышает ёмкость, удаляет наименее недавно использованный элемент
  put(key: number, value: number): void {
    const node = this.cache.get(key);
    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      const newNode = new DoublyLinkedNode(key, value);
      this.cache.set(key, newNode);
      this.addToHead(newNode);

      if (this.cache.size > this.capacity) {
        const tailNode = this.removeTail();
        if (tailNode) {
          this.cache.delete(tailNode.key);
        }
      }
    }
  }
}

// Пример использования:
// @ts-ignore
const cache = new LRUCache(2);
cache.put(1, 1); // Кэш: {1=1}
cache.put(2, 2); // Кэш: {2=2, 1=1} (2 - наиболее недавно использованный)
console.log(cache.get(1)); // возвращает 1, кэш: {1=1, 2=2}
cache.put(3, 3); // удаляется ключ 2, кэш: {3=3, 1=1}
console.log(cache.get(2)); // возвращает -1 (не найден)
cache.put(4, 4); // удаляется ключ 1, кэш: {4=4, 3=3}
console.log(cache.get(1)); // возвращает -1 (не найден)
console.log(cache.get(3)); // возвращает 3
console.log(cache.get(4)); // возвращает 4
