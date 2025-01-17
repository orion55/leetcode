function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const mapS = new Map<string, string>();
  const mapT = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapS.has(charS) && mapS.get(charS) !== charT) {
      return false;
    }
    if (mapT.has(charT) && mapT.get(charT) !== charS) {
      return false;
    }

    mapS.set(charS, charT);
    mapT.set(charT, charS);
  }

  return true;
}

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
