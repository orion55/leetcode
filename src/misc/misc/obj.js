const a = { a: 'a' };
const b = { b: 'b' };
const c = {};

c[a] = a;
c[b] = b;

console.log(a[a]?.a, c[b]?.b);
