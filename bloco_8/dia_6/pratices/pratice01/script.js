const folders = [
  ['index.js'],
  ['flatten.js', 'map.js'],
  ['any.js', ['all.js', 'count.js']],
];

const people = [
  {name: 'Alexandre', age: '30', profettion: 'programmer'},
  {name: 'Karen', age: '25', profettion: 'agent'},
  {name: 'Karen', age: '35', profettion: 'programmer'},
  {name: 'Joanna', age: '29', profettion: 'programmer'},
  {name: 'Alexandre', age: '23', profettion: 'police officer'},
  {name: 'Karen', age: '32', profettion: 'vice-president'},
  {name: 'Marcos', age: '39', profettion: 'programmer'},
  {name: 'Alexandre', age: '29', profettion: 'doctor'},
];

const people2 = [
  {id: '1', name: 'Joe', age: 15},
  {id: '2', name: 'Joanna', age: 16},
  {id: '3', name: 'Bob', age: 17},
];

const orders = [
  { amount: 250},
  { amount: 100},
  { amount: 100},
  { amount: 325},
];

const orders2 = [
  { id: '1', status: 'pedding' },
  { id: '2', status: 'pedding' },
  { id: '3', status: 'cancelled' },
  { id: '4', status: 'cancelled' },
  { id: '4', status: 'cancelled' },
  { id: '4', status: 'shipped' },
];

const profettions = people.reduce((acc, person) => {
  return {...acc, [person.profettion]: (acc[person.profettion] || 0) + 1}
}, {})

console.log(profettions);



function flatten(acc, item) {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
}


const fla = folders.reduce(flatten, []);
console.log(fla);