// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const people = [];

// for (let i in persons) {
//   people.push(`${persons[i].firstName} ${persons[i].lastName}`);
// }

// console.log(people);


// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const people = persons.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(people);

// const listaNumeros = [10, 20, 30, 40];

// const dobro = listaNumeros.map((number) => number * 2);

// console.log(dobro);

const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => number > 0 ? number * (-1) : number);

// console.log(negativeNumbers);
// console.log(numbers);

// const negative = [];

// for (let i in numbers) {
//   if (numbers[i] > 0) {
//     negative.push(numbers[i] * (-1));
//   } else {
//     negative.push(numbers[i]);
//   }
// }
// console.log(negative);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const priceProducts = [];

for (let i in products) {
  priceProducts.push(`{${products[i]}: ${prices[i]}}`);
}

console.table(priceProducts);


const updateProducts = (listProducts, listPrices) => listProducts.map((procuts, i) => `{${procuts}: ${listPrices[i]}}`);

console.table(updateProducts(products, prices));
