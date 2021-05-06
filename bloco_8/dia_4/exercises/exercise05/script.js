
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => (
    acc + curr.split('').reduce((acc, curr) => {
      if (curr === 'a' || curr === 'A') return acc +1; //21
      else return acc;
    },0)
  ),0)
}

console.log(containsA());
assert.deepStrictEqual(containsA(), 20);