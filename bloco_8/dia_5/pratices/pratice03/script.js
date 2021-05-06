// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };
// const {nacionalicty = 'Brasil'} = person;

// const { name, lastName, age } = person;

// console.log(`${name} ${lastName} e tem ${age} anos e mora no ${nacionalicty}`);


// console.log(person);


//Que tal praticarmos default destructuring com um exercício de fixação? Do jeito que está, quando passamos person para a função nationality o retorno é João is undefined . Ajuste a função nationality para que a chamada nationality(person) retorne João is Brazilian .


// const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
//   nacionalicty: 'Brazilian'
// };



// const otherPerson = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russian',
// };


// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));



// const getPosition = (latitude, longitude) => ({latitude,longitude});

// console.log(getPosition(-19.8157, -43.9542));


const greeting = (user = 'usuario') => {
  return `Welcome ${user}`;
}

console.log(greeting('Alexandre')); // Welcome undefined!

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8, 0));