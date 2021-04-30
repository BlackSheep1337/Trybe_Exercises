const sortedNumber = (number1, number2) => number1 === number2;

const game = (number, callback) => {
  const random = Math.floor(Math.random() * 6) + 1;
  
  return callback(number, random) ? 'Voce venceu' : 'Voce perdeu';
}

console.log(game(3, sortedNumber));