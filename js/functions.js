
const isPolydrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return string === reverseString;
};

isPolydrome('Лёша на полке клопа нашёл ');

const getNumber = (string) => {
  if (typeof string === 'number') {
    const value = string.toString().replace(/-|\./g, '');
    return parseInt(value, 10);
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};

getNumber(-1);

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('1', 4, '0');


const isLessOrMore = (string, symbols) => string.length <= symbols;
isLessOrMore('проверяемая строка', 18);
