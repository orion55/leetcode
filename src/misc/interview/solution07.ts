type Item = {
  name: string;
  value?: number;
};

const items: Item[] = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 },
];

function sortArr(arr: Item[]) {
  return arr.sort((a, b) => (a.value || 0) - (b.value || 0));
}

console.log(sortArr(items));
