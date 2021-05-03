const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, i, array) => {
  console.log('Cada elemento da array', element);
  console.log('Cada posicao da array', i);
  console.log('Array inteira', array);
});

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myArray.forEach((number) => 
number % 2 === 0 ? console.log(`${number} eh divisivel por 2`) 
: console.log(`${number} nao eh divisivel por 2`));

