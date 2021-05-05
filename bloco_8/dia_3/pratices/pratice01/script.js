// found even numbers
const numbers = [19, 21, 30, 3, 45, 22, 15];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);



// find people who can drive
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
  { name: 'Ailton', age: 15 },
];

const canDrive = objPeople.filter((person) => person.age >= 18).sort((a, b) => a.name > b.name);
console.table(canDrive);


// remove one student
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudent = (name, arr) => arr.filter((person) => person !== name).sort((a, b) => a > b);

console.table(removeStudent('Jorge', arrayMyStudents));

