const wakeUp = () => console.log('Acordando!!!');
const breakFast = () => console.log('Bora tomar cafe!!');
const someSleep = () => console.log('Partiu dormir!');


const doingThings = (time) => {
  if (time >= 5 && time <= 7) {
    console.log('beeeep, beeeep!!!!');
    wakeUp();
  } else if (time >= 8 && time <= 10) {
    breakFast();
  } else if (time >= 21) {
    someSleep();
  }
}

doingThings(21)
