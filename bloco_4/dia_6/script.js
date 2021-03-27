

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


const array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

const arr = [];

for (let i = 0; i < array.length; i += 1) {
    typeof array[i+1] === Number ? arr.push(array[i] * array[i+1]) : arr.push(array[i]*2);
}
console.log(arr);




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
