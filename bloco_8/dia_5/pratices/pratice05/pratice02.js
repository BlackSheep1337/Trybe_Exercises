const numeros = [2, 3, 6, 5 , 10];

// const total = numeros.reduce((acc, number) => {
//   console.log(acc, number);
//   return acc + number;
// },0)

// console.log(`total is ${total}`);

const bigger = numeros.reduce((acc, number) => (console.log(acc, number), acc > number ? acc: number),-Infinity)

console.log(bigger);