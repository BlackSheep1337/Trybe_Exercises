const body = document.querySelector('#container');
body.style.backgroundColor = "rgb(150, 0, 255)", body.style.fontFamily = "monospace";

const header = document.querySelector('#header-container');
header.style.backgroundColor = "rgba(190, 190, 190, 0.5)", header.style.fontSize = "2em", header.style.borderRadius = "10px";

const h1 = document.querySelector('#header-container h1');
h1.style.fontWeight = "bold";

const emergency = document.querySelector('.emergency-tasks');
emergency.style.backgroundColor = "yellow", emergency.style.borderRadius = "10px";

const h3 = document.querySelectorAll('.emergency-tasks h3');
h3[0].style.backgroundColor = "black", h3[1].style.backgroundColor = "black";

const secondH3 = document.querySelectorAll('.no-emergency-tasks h3');
secondH3[0].style.backgroundColor = "red", secondH3[1].style.backgroundColor = "red";


const noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.backgroundColor = "yellow", noEmergency.style.borderRadius = "10px";



const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = "rgba(190, 190, 190, 0.5)", footer.style.fontSize = "20px", footer.style.borderRadius = "10px";
