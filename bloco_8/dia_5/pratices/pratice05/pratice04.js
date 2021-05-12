let vals = [5, 4, 1, 2, 9];

const max  = vals.reduce((acc, val) => (console.log(acc,val), acc > val) ? acc : val, 0);
const min = vals.reduce((acc, val) => (console.log(acc,val), acc < val) ? acc : val);
console.log(max);
console.log(min);


// console.log(sum);
// let sum = vals.reduce((acc, val) => acc + val);