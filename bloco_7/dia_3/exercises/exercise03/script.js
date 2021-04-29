const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(30), 'fizzbuzz', 'nao eh divisivel por 3 e por 5');
assert.strictEqual(myFizzBuzz(18), 'fizz', 'nao eh divisivel por 3');
assert.strictEqual(myFizzBuzz(20), 'buzz', 'nao eh divisivel por 5');
assert.strictEqual(myFizzBuzz('numero'), 'buzz', 'paramentro nao eh um numero');