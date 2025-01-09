async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Пример использования:
async function example() {
  console.log('Начало');
  await delay(1000); // Задержка 1 секунда
  console.log('Прошло 1 секунда');
}

example();
