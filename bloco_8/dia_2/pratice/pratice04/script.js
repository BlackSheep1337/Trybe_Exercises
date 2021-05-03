// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// // Use o método forEach chamando a callback showEmailList para apresentar os emails.

// emailListInData.forEach(showEmailList);

// const gerateArray = (num) => Array.from({length: num}, ($, i) => i + 1);

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// gerateArray(23).forEach(multipliesFor2);


const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];


names.forEach((n,i,arr) => arr[i] = n.toUpperCase());
console.log(names);