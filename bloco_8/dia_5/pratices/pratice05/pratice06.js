// const foo = {name: 'Doe', age: 30, nervous: false }
// const bar = {name: 'Jon', age: 55, nervous: false }
// const baz = {name: 'Joanna', age: 21, nervous: true }

// console.log({foo, bar, baz});
// console.log('%c My Friends', 'color: oragen; font-weight: bold;');

const numbers = [1, 5, 50,100, 40, 90];

const maxValue = numbers.reduce((acc, cur) => {
  return (acc > cur) ? acc : cur;
},-Infinity)

console.log(maxValue);

const minValue = numbers.reduce((acc, cur) => {
  return (acc < cur) ? acc : cur;
}, undefined)
console.log(minValue);

