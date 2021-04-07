const currentPosition = document.querySelector('#elementoOndeVoceEsta').parentElement;
currentPosition.style.color = "#F00";
currentPosition.style.fontSize = "50px";
currentPosition.style.background = "#0FF";


const firstChildOfChild = document.querySelector('#primeiroFilhoDoFilho');
firstChildOfChild.innerText = "i added this text dinamically";

const father = document.querySelector('#pai').firstElementChild;

const currentNow = document.querySelector('#elementoOndeVoceEsta');


const current = document.querySelector('#elementoOndeVoceEsta');
console.log(father)


const f = document.querySelector('#terceiroFilho');



const simblin = document.querySelector('#elementoOndeVoceEsta');
let elementFather = simblin.parentElement;
let newSimblin = document.createElement('div');
newSimblin.innerText = "New brother in this shit";
newSimblin.id = "ultimoFilho";
elementFather.appendChild(newSimblin);
elementFather



const sonOfson = document.querySelector('#primeiroFilhoDoFilho');
let firstSonOfSon = document.createElement('div');
console.log(sonOfson);


const e = document.querySelector('#elementoOndeVoceEsta');
const s = document.querySelector('#segundoEUltimoFilhoDoFilho');
e.removeChild(s);

const p = document.querySelector('#pai');
const pi = document.querySelector('#primeiroFilho');
p.removeChild(pi)

const model = document.querySelector('#terceiroFilho');
p.removeChild(model)

const model2 = document.querySelector('#quartoEUltimoFilho');
p.removeChild(model2);

const ultimo = document.querySelector('#ultimoFilho');
p.removeChild(ultimo);

const body = document.querySelector('body');
body.appendChild(p);

const fatherOfather = document.querySelector('#paiDoPai');
body.removeChild(fatherOfather);