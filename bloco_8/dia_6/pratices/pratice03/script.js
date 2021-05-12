// const usuarios = [
//   {
//     id: '001',
//     nome: 'Ayrton',
//     idade: 28,
//     email: 'programadorabordo@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=1',
//     sexo: 'M',
//     estado: 'RJ',
//   },
//   {
//     id: '002',
//     nome: 'João',
//     idade: 28,
//     email: 'joao@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=2',
//     sexo: 'M',
//     estado: 'PE',
//   },
//   {
//     id: '003',
//     nome: 'Maria',
//     idade: 28,
//     email: 'maria@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=3',
//     sexo: 'F',
//     estado: 'RJ',
//   },
//   {
//     id: '004',
//     nome: 'Eduardo',
//     idade: 20,
//     email: 'eduardo@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=4',
//     sexo: 'M',
//     estado: 'RS',
//   },
//   {
//     id: '005',
//     nome: 'Antônia',
//     idade: 30,
//     email: 'antonia@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=5',
//     sexo: 'F',
//     estado: 'RJ',
//   },
//   {
//     id: '006',
//     nome: 'Joaquina',
//     idade: 35,
//     email: 'joaquina@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=6',
//     sexo: 'F',
//     estado: 'TO',
//   },
//   {
//     id: '007',
//     nome: 'Mateus',
//     idade: 42,
//     email: 'mateus@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=7',
//     sexo: 'M',
//     estado: 'MG',
//   },
//   {
//     id: '008',
//     nome: 'Davi',
//     idade: 19,
//     email: 'davi@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=8',
//     sexo: 'M',
//     estado: 'MS',
//   },
//   {
//     id: '009',
//     nome: 'Angélica',
//     idade: 27,
//     email: 'angelica@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=9',
//     sexo: 'F',
//     estado: 'RS',
//   },
//   {
//     id: '010',
//     nome: 'Fernando',
//     idade: 31,
//     email: 'fernando@gmail.com',
//     foto: 'https://via.placeholder.com/300/200?id=10',
//     sexo: 'M',
//     estado: 'SP',
//   }
// ];

// /*Normalizacao de dados */
// const getById = usuarios.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// },{})

// // console.log(getById['001']);
// // console.log(getById['002']);

/* Agrupamento */
function grounpingBy(arr, item) {
  return arr.reduce((acc, cur) => {
    if (!acc[cur[item]]) {
      acc[cur[item]] = [];
    }
    acc[cur[item]].push(cur);
    return acc;
  }, {})
}
// console.log(grounpingBy(usuarios, 'estado'));

// function countGrup(arr, item) {
//   return arr.reduce((acc, cur) => {
//     return {...acc, [cur[item]]: (acc[cur[item]] || 0) + 1}
//   },{})
// }
// console.log(countGrup(usuarios, 'idade'));

function entry(entry) {
  if (!Object.keys(entry).length) return 'objct';
}

console.log(entry({}))