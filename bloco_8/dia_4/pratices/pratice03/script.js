const numbers = [50, 85, -30, 3, 15]; // length === 5

let acc = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > acc) {
    acc = numbers[i];
  }
}

console.log(acc);

const getBigger = numbers.reduce((acc, number) => acc > number ? acc : number, 100);
console.log(getBigger);
