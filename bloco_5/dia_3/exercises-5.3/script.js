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

  btnHolyDay.addEventListener('click', function(){
    for (let i = 1; i < arrDays.length; i += 1) {
      if (arrDays[i].innerHTML == 24 || arrDays[i].innerHTML == 25 || arrDays[i].innerHTML == 31) {
        arrDays[i].classList.add('holiday');
      }
    }
  })

  btnHolyDay.addEventListener('click', function() {
    const holy = document.querySelectorAll('.holiday');
    for (let j = 0; j < holy.length; j += 1) {
      if (holy[j].style.background === "rgb(255, 255, 255)") {
        holy[j].style.background = "rgb(238,238,238)";
      } else {
        holy[j].style.background = "rgb(255, 255, 255)";
      }
    }
  })

}
holyDaysBtn();

