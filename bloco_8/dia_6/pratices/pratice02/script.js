/* Soma de numeros */
// const numeros = [5, 12, 30, 10, 99, 4];

// //for exemple;
// let count = 0;
// for (let i = 0; i < numeros.length; i += 1) {
//   count += numeros[i];
// }
// console.log(count);
// //reduce exemple;
// const sum = numeros.reduce((acc, numero) => (acc + numero),0)
// console.log(sum);

// function factorial(number) {
//   const result = Array.from({length: number}, ($, i) => i + 1)
//                   .reduce((acc, cur) => (acc * cur), 1);
//   return result;
// }
// console.log(factorial(5));


/* Calcular Media */
// const numeros = [5, 12, 30, 10, 99, 4];
// let count = 0;
// for (let i = 0; i < numeros.length; i += 1) {
//   count += numeros[i] / numeros.length;
// }
// console.log(count);

// const media = numeros.reduce((acc, number, i, arr) => (acc + number / arr.length),0);
// console.log(media);

/*Fazendo o mesmo que Map e Filter */
const numeros = [5, 12, 30, 10, 99, 4];
// const double = numeros.map((num) => num * 2);
// const doubleReduce = numeros.reduce((acc, num) => ([...acc, num * 2]),[]);
// console.log(doubleReduce);
// console.log(double);

// const evenNumbersFilter = numeros.filter((num) => num % 2 === 0);
// console.log(evenNumbersFilter);

// const evenNumbersReduce = numeros.reduce((acc, num) => {
//   (num % 2 === 0) ? acc.push(num) : acc;
//   return acc.sort((a, b) => a > b);
// }, [])
// console.log(evenNumbersReduce);

/*Flatten */
// const numerosDeNumeros = [ [12, 40], [10, 5, 3], [99, 49, 100], [10, 20, [50, 30, 20]]];

// const flatten = numerosDeNumeros.reduce((acc, numbers) => {
//   return [...acc, ...numbers];
// }, [])  
// console.log(flatten);

