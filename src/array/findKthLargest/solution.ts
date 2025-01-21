// @ts-ignore
function findKthLargest(nums: number[], k: number): number {
  class MinHeap {
    private heap: number[];

    constructor() {
      this.heap = [];
    }

    insert(val: number): void {
      this.heap.push(val);
      this.shiftUp();
    }

    remove(): number {
      if (this.size() === 1) return this.heap.pop()!;

      const root = this.heap[0];
      this.heap[0] = this.heap.pop()!;
      this.shiftDown();

      return root;
    }

    size(): number {
      return this.heap.length;
    }

    private shiftUp(): void {
      let index = this.heap.length - 1;

      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);

        if (this.heap[index] >= this.heap[parentIndex]) break;

        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      }
    }

    private shiftDown(): void {
      let index = 0;
      let smallest = index;

      do {
        index = smallest;
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
          smallest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
          smallest = rightChildIndex;
        }

        if (smallest !== index) {
          [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        }
      } while (smallest !== index);
    }
  }

  const minHeap = new MinHeap();

  for (const num of nums) {
    minHeap.insert(num);
    if (minHeap.size() > k) {
      minHeap.remove();
    }
  }

  return minHeap.remove();
}

// Пример использования
// @ts-ignore
const nums = [3, 2, 1, 5, 6, 4];
// @ts-ignore
const k = 2;
console.log(findKthLargest(nums, k)); // Ожидаемый результат: 5
