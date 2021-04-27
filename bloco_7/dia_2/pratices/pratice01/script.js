const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

customer.lastName = 'Carlos';

console.table(customer)

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.table(customer);

const player = {};

function addObjctValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addObjctValue(player, 'Dota', true));

const user = {
  Name: 'Alexandre',
  Age: 30,
  Profession: 'Programmer',
  player(game) {
    game =  ['Dota', 'League of Legends', 'World of Warcraft'];
    return game;
  }
}

console.log(Object.keys(user));

const empty = {};

console.log(Object.keys(empty));

console.log(Object.keys());

const test = undefined;
console.log(Object.keys(test));

const array = ['a', 'b', 'c'];
console.log(Object.keys(array));

console.log(Object.keys(1, 2, 3));
console.log(Object.keys(1));
console.log(Object.keys('Hello'));
