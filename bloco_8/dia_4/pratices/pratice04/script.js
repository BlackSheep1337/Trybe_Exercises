
// let acc = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     acc += numbers[i];
//   }
// }
// console.log(acc);


// // const isEven = numbers.filter((number) => number % 2 === 0);
// // console.log(isEven);



// const sumEven = numbers.filter((number) => (number % 2 === 0))
// .reduce((acc, number) => acc + number, 0);

// console.log(sumEven);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvens = numbers.reduce((acc, number) => (
  (number % 2 === 0) ? acc + number : acc
), 0);
console.log(sumEvens);
