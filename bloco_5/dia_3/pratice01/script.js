
window.onload = function() {
  const title = document.querySelector('#title');
  const btn = document.querySelector('#btn');
  const btn2 = document.querySelector('#btn2');
  const btn3 = document.querySelector('#btn3');
  const buttons = document.querySelector('#buttons');
  btn2.style.marginLeft = "45%";
  btn3.style.marginLeft = "45%";
  buttons.style.marginLeft = "45%";
  buttons.style.marginTop = "25px";
  title.style.textAlign = "center";
  title.style.color = "#00F";
  btn.style.marginLeft = "45%";
  btn.style.color = "rgb(0, 0, 255)";
  btn2.style.color = "rgb(255, 0, 0)";
  btn3.style.color = "rgb(0, 255, 0)";



  
  // btn.addEventListener('click', function(event) {
  //   if (event.target.style.color === "rgb(0, 0, 255)") {
  //     event.target.style.color = "rgb(255, 0, 0)";
  //   } else {
  //     event.target.style.color = "rgb(0, 0, 255)";
  //   }
  // }); 
  btn.addEventListener('click', changeColor);
  btn2.addEventListener('click', changeColor);
  btn3.addEventListener('click', changeColor);
  buttons.addEventListener('click', changeColor);


  function changeColor() {
    if (btn.style.color === "rgb(0, 0, 255)") btn.style.color = "rgb(255, 0, 0)";
    else btn.style.color = "rgb(0, 0, 255";

    if (btn2.style.color === "rgb(255, 0, 0)") btn2.style.color = "rgb(0, 0, 255)";
    else btn2.style.color = "rgb(255, 0, 0)";

    if (btn3.style.color === "rgb(0, 255, 0)") btn3.style.color = "rgb(255, 0, 0)";
    else btn3.style.color = "rgb(0, 255, 0)";

  }


}


