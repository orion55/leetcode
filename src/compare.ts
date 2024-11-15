// Реализуйте функцию, которая принимает две строки и возвращает true если они равны.
// Символ решетки # в строке должен интерпретироваться как backspace.
const solution = () => {
  const compareStrings = (first: string, second: string): boolean => {
    const getValidCharIndex = (str: string, index: number): number => {
      let backspaces = 0;

      while (index >= 0) {
        if (str[index] === '#') {
          backspaces++;
        } else if (backspaces > 0) {
          backspaces--;
        } else {
          return index;
        }
        index--;
      }

      return -1;
    };

    let i = first.length - 1;
    let j = second.length - 1;

    while (i >= 0 || j >= 0) {
      i = getValidCharIndex(first, i);
      j = getValidCharIndex(second, j);

      if (i >= 0 && j >= 0 && first[i] !== second[j]) {
        return false;
      }

      if (i >= 0 !== j >= 0) {
        return false;
      }

      i--;
      j--;
    }

    return true;
  };

  console.log(compareStrings('ab#c', 'ab#c')); // true
  console.log(compareStrings('ab##', 'c#d#')); // true
  console.log(compareStrings('a#c', 'b')); // false
  console.log(compareStrings('', 'v'));
};

export default solution;
