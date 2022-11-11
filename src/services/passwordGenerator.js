import { forEach, random } from 'lodash';
import { generatePath } from 'react-router';

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
const uppercase = lowercase.map(letter => letter.toUpperCase());
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', '?', '|', '_', '+', '-'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const charSet = { lowercase, uppercase, symbols, numbers };
export function generatePassword(numberOfCharacters, options) {
  const password = [];
  const characters = [];
  const obj = Object.entries(options).forEach(item => {
    const [name, value] = item;
    value ? characters.push(charSet[name]) : null;
  })
  if (characters.length > 0) {
    for (let i = 0; i < numberOfCharacters; i++) {
      let n = random(0, characters.length - 1);
      password.push(characters[n][random(0, characters[n].length - 1)]);
    }
  }
  else {
    password.push('ooops!')
  }
  return password.join('');
}