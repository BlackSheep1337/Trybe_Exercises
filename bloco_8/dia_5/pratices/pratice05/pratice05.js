const people = [
  {id: '1', name: 'Joe', age: 15},
  {id: '2', name: 'Joanna', age: 16},
  {id: '3', name: 'Bob', age: 17},
];

//count;

const amountOfPpl = people.reduce((acc, person) => (acc + 1) ,0);
// console.log(amountOfPpl);

// sum ages;
const sumAges = people.reduce((acc, person) => (acc + person.age),0)
// console.log(sumAges);

// array of names (map);

const getByNames = people.reduce((acc, person) => [...acc, person.age], []);
// console.log(getByNames);

//convert to id => person lookup (dict);

const enumerateById = people.reduce((acc, person) => {
  return {...acc, [person.id]: person}
}, {})
// console.log(enumerateById);

// max age;

const maxAge = people.reduce((acc, person) => (acc > person.age) ? acc : person.age, -Infinity);
// console.log(maxAge);

// min age;
const minAge = people.reduce((acc, person) => (acc < person.age) ? acc : person.age, undefined);
// console.log(minAge);

// find by name;

const findByName = people.reduce((acc, person) => (person.name === 'Bob') ? person : acc ,'')
// console.log(findByName);

// all ppl over 18

const over18 = people.reduce((acc, person) => {
  // console.log(acc, person.age);
  if (!acc) return false;
  return person.age >= 18;
}, true)
// console.log(over18);

// any over 18;

const any18 = people.reduce((acc, person) => {
  // console.log(acc,person.age);
  if (acc) return true;
  return person.age >= 17; 
},false)
// console.log(any18);

//count ocurrence
const orders = [
  { id: '1', status: 'pedding' },
  { id: '2', status: 'pedding' },
  { id: '3', status: 'cancelled' },
  { id: '4', status: 'shipped' },
];

const occu = orders.reduce((acc, cur) => {
  // console.log(acc, cur);
  return {...acc, [cur.status]: (acc[cur.status] || 0) + 1}
},{});
// console.log(occu);
const pedding = orders.reduce((acc, item) => {
  if (item.id > '1' && item.id < '4') {
    return [...acc, item ];
  }
  return acc;
}, [])
// console.log(pedding);

// flatten
const folders = [
  ['index.js'],
  ['flatten.js', 'map.js'],
  ['any.js', ['all.js', 'count.js']],
];

function flatten(acc, item) {
  if (Array.isArray(item)) {
    return  item.reduce(flatten, acc);
  }
  return [...acc, item];
}
const flattenResult = folders.reduce(flatten, []);

// console.log(flattenResult);


// create reduce ourselves

