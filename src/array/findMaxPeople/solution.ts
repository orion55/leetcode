// Функция для преобразования времени "hh:mm" в минуты с начала дня
function parseTime(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}
function findMaxPeople(intervals: string[][]): number {
  // Преобразуем интервалы в события
  const events: { time: number; type: 'entry' | 'exit' }[] = [];

  for (const [entry, exit] of intervals) {
    const entryTime = parseTime(entry);
    const exitTime = parseTime(exit);
    events.push({ time: entryTime, type: 'entry' });
    events.push({ time: exitTime, type: 'exit' });
  }

  // Сортируем события по времени, при равенстве времени "exit" раньше "entry"
  events.sort((a, b) => a.time - b.time || (a.type === 'exit' ? -1 : 1));

  // Считаем максимальное количество людей в помещении
  let maxPeople = 0;
  let currentPeople = 0;

  for (const event of events) {
    if (event.type === 'entry') {
      currentPeople++;
      maxPeople = Math.max(maxPeople, currentPeople);
    } else {
      currentPeople--;
    }
  }

  return maxPeople;
}

// Пример использования
// @ts-ignore
const intervals = [
  ['9:11', '10:12'],
  ['10:01', '11:13'],
  ['12:05', '13:18'],
];
console.log(findMaxPeople(intervals)); // Ожидаемый результат: 2
