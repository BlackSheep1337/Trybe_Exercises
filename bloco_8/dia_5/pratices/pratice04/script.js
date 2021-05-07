// What you have
// var officers = [
//   { id: 20, name: 'Captain Piett' },
//   { id: 24, name: 'General Veers' },
//   { id: 56, name: 'Admiral Ozzel' },
//   { id: 88, name: 'Commander Jerjerrod' }
// ];
// // What you need
// [20, 24, 56, 88]

// const officerId = officers.map((officer) => officer.id);
// console.log(officerId);

// var pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   }
// ];

// const totalOfYears = pilots.reduce((acc, pilot) => (
//   acc.name > pilot.name ? acc : pilot
// ),'');
// console.log(totalOfYears.name);


// var pilots = [
//   {
//     id: 2,
//     name: "Wedge Antilles",
//     faction: "Rebels",
//   },
//   {
//     id: 8,
//     name: "Ciena Ree",
//     faction: "Empire",
//   },
//   {
//     id: 40,
//     name: "Iden Versio",
//     faction: "Empire",
//   },
//   {
//     id: 66,
//     name: "Thane Kyrell",
//     faction: "Rebels",
//   }
// ];

// const rebels = pilots.filter((pilot) => pilot.faction === 'Rebels');
// console.table(rebels);
// const empire = pilots.filter((pilot) => pilot.faction === 'Empire');
// console.table(empire);


var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const jediPerson = personnel
  .filter((person) => person.isForceUser)
  .map((jedi) => jedi.shootingScore + jedi.pilotingScore)
  .reduce((acc, score) => acc + score,0);

console.log(jediPerson);

const totalJedi = personnel
.reduce((acc, person) =>
  person.isForceUser ? 
  acc + person.pilotingScore + person.shootingScore : 
  acc ,0);


console.log(totalJedi);