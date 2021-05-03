const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOfFive;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOfFive = numbers[i];
    break;
  }
}

console.log(firstMultipleOfFive);

const findMultipleOf5 = (number) => number.find((n) => n % 5 === 0);

console.log(findMultipleOf5(numbers));
