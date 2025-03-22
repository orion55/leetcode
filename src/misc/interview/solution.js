function changeStuff(a, b) {
  a = a * 10;
  b.item = 'changed';
}

const num = 10;
const obj1 = { item: 'unchanged' };

changeStuff(num, obj1);

console.log(num);
console.log(obj1.item);
