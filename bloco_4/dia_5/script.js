// let patientId = "50";
// let isEnrolled = true;
// const patientInfo = {
//     firstName: 'Ana',
//     lastName: 'Santos',
// };
// const patientEmail = 'ana@gmail.com';

// console.log(typeof(patientId));
// console.log(typeof(isEnrolled));
// console.log(typeof(patientInfo));
// console.log(typeof(patientEmail));
// console.log(typeof(patientAge));

// let base = 5;
// let altura = 8;
// let area = base * altura;
// let perimetro = area + base + altura;
// console.log(area);
// console.log(perimetro);

// const nota = 60;

// if (nota >= 80) {
//     console.log('Parabens, voce foi aprovado');
// } else if (nota < 80 && nota >= 60) {
//     console.log("voce esta na lista de espera");
// } else if (nota < 60) {
//     console.log("voce foi reprovado");
// }

//1.cinco operacoes
const soma = (a,b) => a + b;
console.log(soma(10,10));
const subtracao =(a,b) => a - b;
console.log(subtracao(5, 3));
const mult = (a,b) => a * b;
console.log(mult(3, 5));
const divi = (a,b) => a / b;
console.log(divi(10, 2));
const even = (a, b) => a % b;
console.log(even(16, 2));
//cinco operacoes.


//2.retorna o maior de dois numeros.
const compair = (a, b) => a > b ? a : b;
console.log(compair(10, 20));


//3.retorna o maior de tres numeros.
const compairThree = (a, b, c) => {
    if (a > b) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(compairThree(50, 40, 30));


//4.retorna positive/negative ou zero
const isPositive = (a) => {
    if (a > 0) {
        return "positive";
    } else if (a < 0) {
        return "negative"
    } else {
       return "zero"
    }
}
console.log(isPositive(0));


//5.ache a area do triangulo.
const triangle = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "[ERROR]"
    } else if (a + b + c === 180) {
        return true;
    } else if (a + b + c < 180) {
        return false;
    }
}
console.log(triangle(0,50,100));


