const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/


function addTech(element) {
  element.classList.add('tech');
  return element;
}

addTech(divUm);

input.addEventListener('change', changeElement)

function changeElement() {
  if (divUm.classList.value === 'tech') {
    divUm.classList.remove('tech');
    divDois.classList.add('tech');
  } else if (divDois.classList.value === 'tech') {
    divDois.classList.remove('tech');
    divTres.classList.add('tech');
  } else {
    divTres.classList.remove('tech');
    divUm.classList.add('tech');
  }
  input.value = "";
}

myWebpage.addEventListener('dblclick', redirect);
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseleave', changeColorWhite);

function changeColor() {
  myWebpage.style.color = "#00F"
}

function changeColorWhite() {
  myWebpage.style.color = "#FFF"
}



function redirect() {
  window.location.href = "https://alexandrepereiraport.netlify.app/";
}



function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.