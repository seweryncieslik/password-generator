import { sample, shuffle } from 'lodash';

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
const uppercase = lowercase.map(letter => letter.toUpperCase());
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', '?', '|', '_', '+', '-'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const charSet = { lowercase, uppercase, symbols, numbers };

export function generatePassword(numberOfCharacters, options) {
  const charactersPool = Object
    .entries(options)
    .reduce((pool, [name, isSelected]) => isSelected 
      ? [ ...pool, charSet[name]]
      : pool, []);

  return shuffle(
      Array.from(' '.repeat(numberOfCharacters))
        .map((_, i) => sample(charactersPool[i % charactersPool.length]))
    ).join('');
}