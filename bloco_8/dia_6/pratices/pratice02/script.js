/* Soma de numeros */
const numeros = [5, 12, 30, 10, 99, 4];

//for exemple;
let count = 0;
for (let i = 0; i < numeros.length; i += 1) {
  count += numeros[i];
}
console.log(count);
//reduce exemple;
const sum = numeros.reduce((acc, numero) => (acc + numero),0)
console.log(sum);

function factorial(number) {
  const result = Array.from({length: number}, ($, i) => i + 1)
                  .reduce((acc, cur) => (acc * cur), 1);
  return result;
}
console.log(factorial(5));