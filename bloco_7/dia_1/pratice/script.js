// function userInfo() {
//   const userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
// }
// userInfo();
// console.log(userEmail);

const objPessoa = (name, age) => ({Nome: name, Idade: age});
console.log(objPessoa('Alexandre', 30));