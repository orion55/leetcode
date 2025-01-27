// @ts-ignore
function isPalindrome(line: string): boolean {
  // Убираем все ненужные символы (не буквы и не цифры) и приводим строку к нижнему регистру
  const cleanedString = line.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Сравниваем строку с её обратной версией
  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
}

console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('race a car')); // false
