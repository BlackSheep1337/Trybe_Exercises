
// const organizations = ['Pyke', 'Black Sun', 'Kanjiklub', 'Crimson Dawn'];
// const [firstGang, secondGang, ...theRest] = organizations;






// console.log(secondGang); // Outputs 'Black Sun'
// console.log(firstGang); // Outputs 'Pyke'
// console.log(theRest)


// const organizations = [undefined, undefined];

// const [
//   firstGang = 'First Order',
//   secondGang = 'Resistance',
//   thirdGang = 'New Republic'
// ] = organizations;

// console.log(firstGang); // Outputs 'Pyke'
// console.log(secondGang); // Outputs 'Black Sun'
// console.log(thirdGang); // Outputs 'New Republic'



// const planet = {
//   name: 'Hosnian Prime',
//   faction: 'New Republic',
//   weather: 'Temperate'
// };

// const {name = 'Luki', faction, weather } = planet;

// console.log(name);
// console.log(faction);
// console.log(weather);



// const planet = {
//   name: 'Hosnian Prime',
// };
// const {
//   name = 'Unkown name',
//   faction = 'Unknown faction',
//   weather = 'Unknown conditions',
// } = planet;

// console.log(name); // Outputs 'Hosnian Prime'
// console.log(faction); // Outputs 'New Republic'
// console.log(weather);



function shipGenerator(options = {}) {
  const {
    cannons = 4,
    engines = 2,
    crew = 10
  } = options; // Default options
  
  return `This ship has ${cannons} cannons, ${engines} engines, and ${crew} crew members.`;
}

console.log(shipGenerator({ engines: 10, crew: 20, cannons: 10 })); // Outputs 'This ship has 4 cannons, 10 engines and 20 crew members.'
console.log(shipGenerator({ cannons: 5, crew: 20, engines: 30 })); // Outputs 'This ship has 0 cannons, 2 engines and 10 crew members.'
console.log(shipGenerator()); // Outputs 'This ship has 4 cannons, 2 engines and 10 crew members.'