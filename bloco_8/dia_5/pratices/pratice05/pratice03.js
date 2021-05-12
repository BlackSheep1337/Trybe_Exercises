const orders = [
  { amount: 250},
  { amount: 400},
  { amount: 100},
  { amount: 325},
];

let count = 0;

for (let i = 0; i < orders.length; i += 1) {
  count += orders[i].amount;
}

console.log(count);

const total = orders.reduce((acc, amount) => (console.log(acc, amount), acc + amount.amount),0);
console.log(total);