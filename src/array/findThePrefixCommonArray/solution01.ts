// @ts-ignore
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const result: number[] = [];
  const seen = new Set<number>();
  let commonCount = 0;

  for (let i = 0; i < A.length; i++) {
    // Если элемент A[i] уже был встречен, это общий элемент
    if (seen.has(A[i])) {
      commonCount++;
    } else {
      seen.add(A[i]);
    }

    // Если элемент B[i] уже был встречен, это общий элемент
    if (seen.has(B[i])) {
      commonCount++;
    } else {
      seen.add(B[i]);
    }

    // Сохраняем количество общих элементов на текущем шаге
    result.push(commonCount);
  }

  return result;
}

// Пример
// @ts-ignore
const A = [1, 3, 2, 4];
// @ts-ignore
const B = [3, 1, 2, 4];
console.log(findThePrefixCommonArray(A, B)); // [0, 2, 3, 4]
