

// let number = 8;

// for (let i = 1; i <= 10; i += 1) {
//     console.log(i + ' x ' + number + ' = ' + number * i);
// }


// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let i = 0; i < groceryList.length; i += 1) {
//     console.log(groceryList[i]);
// }

// const nomes = ['Maria', 'Felipe', 'Joao', 'Kleber']

// for (let index of nomes) {
//     console.log(index[0] + index[index.length -1]);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let index of names) {
//     console.log(index);
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i] / numbers.length;
// }

// console.log(sum);


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let largest = 0;
// let smaller = 5000;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log(largest);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let odd = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 1) {
//         odd += 1;
//     } else {
//         console.log('Nenhum Valor encontrado');
//     }
// }
// console.log(odd);



// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let smaller = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < smaller) {
//         smaller = numbers[i];
//     }
// }
// console.log(smaller);


// let arr = [];



// for (let i = 1; i <= 25; i += 1) {
//     arr.push(i / 2);
// }

// console.log(arr);


// const array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

// const arr = [];

// for (let i = 0; i < array.length; i += 1) {
//     typeof array[i+1] === Number ? arr.push(array[i] * array[i+1]) : arr.push(array[i]*2);
// }
// console.log(arr);




// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (array[index] < array[secondIndex]) {
//             let postion = array[index];
//             array[index] = array[secondIndex];
//             array[secondIndex] = postion;
//         } 
//     }
// }
// console.log(array);

// let pizzas = {
//     sabor: "Palmito",
//     preco: 39.90,
//     bordaCatupiry: true
// };

// for (let key in pizzas) {
//     console.log(pizzas[key]);
// }


// let pizzasDoces = ['chocolate', 'banana', 'morango'];

// for (let key in pizzasDoces) {
//     console.log(key, pizzasDoces[key]);
// }

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let i in cars) {
//     console.log(i, cars[i]);
// }

// let car =  {
//     type: "Fiat",
//     model: "500",
//     color: "White"
// };

// for (let i in car) {
//     console.log(i);
// }

// let food = ['hamburguer', 'bife', 'acaraje'];

// for (let position in food) {
//     console.log(position);
// }

// for (let value of food) {
//     console.log(value);
// }

// let names = {
//     person1: 'Joao',
//     person2: 'Maria',
//     person3: 'Jorge'
// };

// for (let i in names) {
//     console.log('Ola ' + names[i]);
// }

// let carros = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
// };

// for (let i in carros) {
//     console.log(i + ': ' + carros[i])
// }



// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal dos quadrinhos do Pato Donald'
// };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
//     nota: 'O ultimo MacPatinhas',
//     recorrente: 'Sim'
// };

// // console.log('Bem-Vinda, ' + info.personagem);

// info.recorrente = 'Sim';

// console.log(info);

// for (let i in info) {
//     console.log(i);
// }

// for (let i in info, info2) {
//     console.log(info[i] + ' e ' + info2[i]);
// }



// const palimdrome = (str) => {
//     for (let i in str) {
//         if (str[0].toLowerCase() === str[str.length - 1 - i]) return true;
//         else return false;
//     }
// }
// console.log(palimdrome('A mae te ama'));


// const greatestValue = (arr) =>  arr.indexOf(Math.max.apply(null, arr));
// console.log(greatestValue([2, 4, 6, 7, 10, 0, -3]))


// const minValue = (arr) => arr.indexOf(Math.min.apply(null, arr));
// console.log(minValue([2, 4, 6, 7, 10, 0, -3]))

// const arrNames = (arr) => arr.reduce((a, b) => a.length > b.length ? a : b);
// console.log(arrNames(['Jose', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']));


function occurrenceArr(arr) {
    return arr;
}

console.log(occurrenceArr[2, 3, 2, 5, 8, 2, 3]);