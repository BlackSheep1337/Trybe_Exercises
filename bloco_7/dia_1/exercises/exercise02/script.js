const fatorial = (number) => {
  let result = number;
  for (let i = 1; i < number; i += 1) {
    result *= i;
  }
  return result;
}

console.log(fatorial(5));

const longest = str => str.split(' ').reduce((a, b) => a.length > b.length ? a : b, '');  

console.log(longest("Antônio foi no banheiro e não sabemos o que aconteceu"));
