function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysofTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.querySelector('#days');
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const numberDays = dezDaysList[i];
    const numberDaysList = document.createElement('li');
    numberDaysList.innerHTML = numberDays;

    days.appendChild(numberDaysList);
  }
}
createDaysofTheMonth();

function holyDays(str) {
  const btn = document.createElement('button');
  btn.innerText = str;
  btn.classList.add('btn-holiday');
  const div = document.querySelector('.buttons-container');
  div.appendChild(btn);
}
holyDays('Feriados');

function holyDaysBtn() {
  const btnHolyDay = document.querySelector('.btn-holiday');
  const dayHoly = document.querySelector('#days')
  const arrDays = dayHoly.childNodes;
  const arrOfHoly = [24, 25, 31];

  btnHolyDay.addEventListener('click', function(){
    for (let i = 1; i < arrDays.length; i += 1) {
      const holyDay = arrDays[i];
      
      for (let j = 0; j < arrOfHoly.length; j += 1) {
        if (holyDay.innerHTML == arrOfHoly[j]) {
          holyDay.classList.add('holiday');
        }
      }
    }
  });

  btnHolyDay.addEventListener('click', function() {
    const holy = document.querySelectorAll('.holiday');
    for (let j = 0; j < holy.length; j += 1) {
      if (holy[j].style.background === "rgb(255, 255, 255)") {
        holy[j].style.background = "rgb(238,238,238)";
      } else {
        holy[j].style.background = "rgb(255, 255, 255)";
      }
    }
  });

}
holyDaysBtn();

function friday(str) {
  const div = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');
  btnFriday.innerHTML = str;
  btnFriday.id = "btn_friday";
  div.appendChild(btnFriday);
}

friday('Sexta-Feira');

function callMufasa() {
  const fridayBtn = document.querySelector('#btn_friday');
  const fridayDays = document.querySelector('#days').childNodes;
  const friArr = [4, 11, 18, 25];


  for (let i = 0; i < fridayDays.length; i += 1) {
    const current = fridayDays[i];

    for (let j = 0; j < friArr.length; j += 1) {
      if (current.innerHTML == friArr[j]) {
        current.classList.add('friday');
      }
    }
  }
  
  fridayBtn.addEventListener('click', function() {
    const fridayMufa = document.querySelectorAll('.friday');
    for (let j = 0; j < fridayMufa.length; j += 1) {
      fridayMufa[j].innerHTML == "MUFASA!!" ? 
      fridayMufa[j].innerHTML = friArr[j] : fridayMufa[j].innerHTML = "MUFASA!!";
    } 
  });
}
callMufasa();

function mouseOver() {
  const daysColor = document.querySelector('#days').childNodes;

  for (let i = 0; i < daysColor.length; i += 1) {
    daysColor[i].addEventListener('mouseover', changeColorAndSize);
    daysColor[i].addEventListener('mouseleave', changeColorAndSize);
  }  
}
mouseOver();
 
function changeColorAndSize(e) {
  if (e.type == 'mouseover') {
    e.target.style.color = "#F00";
    e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    e.target.style.fontSize = "25px";
  } else {
    e.target.style.color = "#777";
    e.target.style.fontSize = "20px";
    e.target.style.backgroundColor = "rgb(238,238,238)";
  }
}



function color(strColor) {
  const createdDiv = document.createElement('div');
  const div = document.querySelector('.my-tasks');
  createdDiv.classList.add('task');
  createdDiv.style.backgroundColor = strColor;
  div.appendChild(createdDiv);
}
color('#A9A9A9');

function taskColor() {
  const divTask = document.querySelector('.task');
  divTask.addEventListener('click', function(e){
    if (e.target.classList.value === "task") {
      e.target.classList = "task selected";
      e.target.style.background = "#0F0";
    } else {
      e.target.classList = "task";
      e.target.style.background = "#A9A9A9";
    } 
  });
}
taskColor();


function handleTaskInput() {
  const divTask = document.querySelector('.input-container');
  const label = document.createElement('label');

  divTask.style.display = "inline-block"
  label.innerHTML = "Novo:"
  label.style.display = "inline-block"

  const input = document.createElement('input');
  input.type = "text";
  input.id = "tasks-add";
  input.placeholder = "Escreva sua tarefa";
  label.style.display = "inline-block"

  const btnTask = document.createElement('button');
  btnTask.id = "btn-add2";
  btnTask.innerHTML = "Adicionar";
  btnTask.style.display = "inline-block";

  divTask.appendChild(label);
  divTask.appendChild(input);
  divTask.appendChild(btnTask);

}
handleTaskInput();

function createSpan() {
  const divTask = document.querySelector('.task');
  for (let i = 0; i < 10; i += 1) {
    const spanTask = document.createElement('span');
    divTask.appendChild(spanTask);
  }
}
createSpan();



function taskName() {
  const inputTextStr = document.querySelector('#tasks-add');
  const btnTaskAdd = document.querySelector('#btn-add2');
  const div = document.querySelector('.task');
  const arrSpan = div.childNodes;

  btnTaskAdd.addEventListener('click', function() {
    //put a string in each span of the arraySpan;
    

  });

  
}
taskName();


