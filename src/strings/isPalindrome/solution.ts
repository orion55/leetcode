// @ts-ignore
function isPalindrome(line: string): boolean {
  let left = 0;
  let right = line.length - 1;

  while (left < right) {
    // Пропускаем символы, которые не являются буквами или цифрами
    if (!/[A-Za-z0-9]/.test(line[left])) {
      left++;
    } else if (!/[A-Za-z0-9]/.test(line[right])) {
      right--;
    } else {
      // Сравниваем символы в нижнем регистре
      if (line[left].toLowerCase() !== line[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('race a car')); // false
