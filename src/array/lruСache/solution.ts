class LRUCache {
  private cache: Map<number, number>;
  private capacity: number;

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key)!;
    // Перемещаем ключ в конец, чтобы он был самым недавно использованным
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Удаляем самый старый элемент (первый элемент в Map)
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}

const cache = new LRUCache(2);
cache.put(1, 1); // кэш = {1=1}
cache.put(2, 2); // кэш = {1=1, 2=2}
console.log(cache.get(1)); // возвращает 1, кэш = {2=2, 1=1}
cache.put(3, 3); // кэш = {1=1, 3=3}, удалён ключ 2
console.log(cache.get(2)); // возвращает -1 (не найдено)
cache.put(4, 4); // кэш = {3=3, 4=4}, удалён ключ 1
console.log(cache.get(1)); // возвращает -1 (не найдено)
console.log(cache.get(3)); // возвращает 3
console.log(cache.get(4)); // возвращает 4
