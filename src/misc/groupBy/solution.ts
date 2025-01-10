// @ts-ignore
interface Person {
  name: string;
  age: number;
  city: string;
}

const people: Person[] = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Chicago' },
  { name: 'Charlie', age: 25, city: 'New York' },
  { name: 'David', age: 30, city: 'Chicago' },
  { name: 'Eve', age: 35, city: 'Boston' },
];

type GroupedPersons = { [key: string]: Person[] };

function groupBy(arr: Person[], key: keyof Person | ''): GroupedPersons {
  if (key === '') throw new Error('The key cannot be empty!');
  if (arr.length === 0) throw new Error('The arr cannot be empty!');

  const keys = Object.keys(arr[0]);
  if (!keys.includes(key)) throw new Error('The key must be in the object!');

  return arr.reduce<GroupedPersons>((acc, current) => {
    const groupKey = current[key] as string;
    acc[groupKey] = acc[groupKey] || [];
    acc[groupKey].push(current);
    return acc;
  }, {});
}

console.log(groupBy(people, 'age'));
console.log(groupBy(people, 'name'));
console.log(groupBy(people, 'city'));
