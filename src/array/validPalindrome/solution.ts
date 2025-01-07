function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  function isPalindromeRange(left: number, right: number): boolean {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      // Попробуем проигнорировать символ с левой стороны или с правой
      return isPalindromeRange(left + 1, right) || isPalindromeRange(left, right - 1);
    }
  }

  return true;
}

console.log(validPalindrome('aba')); // true
console.log(validPalindrome('abca')); // true
console.log(validPalindrome('abc')); // false
