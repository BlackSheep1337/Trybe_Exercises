
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [secondCountry, firstCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada


const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [hellow, world] = saudacoes;


world(hellow)// Olá


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';


// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

console.log(comida, animal, bebida); // arroz gato água

const numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [one, three, five, six, eight, ten, twoeven] = numerosPares.splice(0, 3);


// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

console.log(numerosPares); // [6, 8, 10, 12]