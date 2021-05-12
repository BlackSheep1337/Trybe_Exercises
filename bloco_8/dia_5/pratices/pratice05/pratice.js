// const numeros = [2, 3, 6, 5 , 10];
// const novoArrayNumeros = [];

// for (let i = 0; i < numeros.length; i += 1) {
//   novoArrayNumeros.push(numeros[i] * 2);
// }

// console.log (novoArrayNumeros);

// const trible = numeros.map((number) => number  % 2 === 0);
// console.log(trible);

// const nomes = ['Doe', 'Joe', 'Alexandre', 'Adriana', 'Adriele'];

// const lowerCase = nomes.map((person) => person.toLowerCase());
// console.log(lowerCase);


// const filtredNumbers = [];

// for (let i = 0; i < numeros.length; i += 1) {
//   if (numeros[i] % 2 === 0) {
//     filtredNumbers.push(numeros[i]);
//   }
// }
// console.log(filtredNumbers);

// const filtredNums = numeros.filter((number) => number % 2 === 0);
// console.log(filtredNums);
// const evenMultiples = numeros
//   .filter((even) => even % 2 === 0)
//   .map((number) => number * 2);

// console.log(evenMultiples);

// const sum = numeros.reduce((acc, numero) => {
//   return acc + numero;
// },[]);
// console.log(sum);

// let count = 0;

// for (let i = 0; i < numeros.length; i += 1) {
//   count += numeros[i];
// }
// console.log(count);

const data = [
  {
    name: 'Alexandre',
    age: 30
  },
  {
    name: 'Adriana',
    age: 42
  },
  {
    name: 'Joe',
    age: 15
  },
  {
    name: 'Margarett',
    age: 12
  },
  {
    name: 'Eloise',
    age: 17
  },
  {
    name: 'Samuel',
    age: 14
  },
  {
    name: 'Railda',
    age: 36
  },
  {
    name: 'Ines',
    age: 67
  }
];

const pessoasAgrupadasPorIdade = data.reduce((acc, person) => {
  const maioresIdade = person.age >= 18 ? 'canDrive' : 'cantDrive';
  acc[maioresIdade].push(person)
  return acc;
},{canDrive: [], cantDrive: []});

console.log(pessoasAgrupadasPorIdade)

const names = [ 'Jose', 'LuizDacunha', 'EmanuelleDaSilva', 'Alexandre', 'DoeJoeHo'];

const first = names.reduce((acc, name) => {
  return (acc.length > name.length) ? acc : name;
},'')

console.log(first);