// @ts-ignore
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const result: number[] = [];
  const setB = new Set();
  const setA = new Set();

  for (let i = 0; i < A.length; i++) {
    setA.add(A[i]);
    setB.add(B[i]);

    // Пересекаем два множества, чтобы найти общие элементы
    const common = new Set([...setA].filter((x) => setB.has(x)));

    // Добавляем количество общих элементов в результат
    result.push(common.size);
  }

  return result;
}

// Пример
// @ts-ignore
const A = [1, 3, 2, 4];
// @ts-ignore
const B = [3, 1, 2, 4];
console.log(findThePrefixCommonArray(A, B)); // [0, 2, 3, 4]
