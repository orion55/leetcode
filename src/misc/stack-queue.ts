// Реализуйте функцию, которая принимает две строки и возвращает true если они равны.
// Символ решетки # в строке должен интерпретироваться как backspace.

const solution = () => {
  const compareStrings = (first: string, second: string): boolean => {
    const calculateString = (value: string): string => {
      if (value.length === 0) return '';

      const stack: string[] = [];

      for (let i = 0; i < value.length; i++) {
        if (value[i] !== '#') {
          stack.push(value[i]);
        } else if (value[i] === '#') {
          stack.pop();
        }
      }

      return stack.join('');
    };

    return calculateString(first) === calculateString(second);
  };

  console.log(compareStrings('ab#c', 'ab#c')); // true
  // обе строки в итоге преобразуются в 'ac'

  console.log(compareStrings('ab##', 'c#d#')); // true
  // обе строки преобразуются в пустую строку ''

  console.log(compareStrings('a#c', 'b')); // false
  // первая строка будет равна 'c', а вторая 'b'

  console.log(compareStrings('', 'v'));
};

export default solution;
