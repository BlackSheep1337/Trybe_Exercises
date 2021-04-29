const assert = require('assert');

const greetPeople = (people) => people.map((a) => `Hello ${a}`);

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);
const expected = result;

assert.deepStrictEqual(output, expected);