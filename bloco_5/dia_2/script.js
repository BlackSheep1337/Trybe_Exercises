const currentPosition = document.querySelector('#elementoOndeVoceEsta').parentElement;
currentPosition.style.color = "#F00";
currentPosition.style.fontSize = "50px";
currentPosition.style.background = "#0FF";


const firstChildOfChild = document.querySelector('#primeiroFilhoDoFilho');
firstChildOfChild.innerText = "i added this text dinamically";

const father = document.querySelector('#pai').firstElementChild;

const currentNow = document.querySelector('#elementoOndeVoceEsta');


const current = document.querySelector('#elementoOndeVoceEsta');



const f = document.querySelector('#terceiroFilho');



const simblin = document.querySelector('#elementoOndeVoceEsta');
let elementFather = simblin.parentElement;
let newSimblin = document.createElement('div');
newSimblin.innerText = "New brother in this shit";
elementFather.appendChild(newSimblin);
console.log(elementFather)



const sonOfson = document.querySelector('#primeiroFilhoDoFilho');
let firstSonOfSon = document.createElement('div');
sonOfson.appendChild(firstSonOfSon);
console.log(sonOfson.parentElement.nextElementSibling);






