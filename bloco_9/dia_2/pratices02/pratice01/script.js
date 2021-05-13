// const fetchPokemon = () => {
//   fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
//     .then((response) => {
//       response.json()
//         .then((data) => {
//           appendPokemon(data);
          
//           fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//           .then((response) => {
//             response.json()
//               .then((data) => {
//                 appendPokemon(data);
                
//                 fetch('https://pokeapi.co/api/v2/pokemon/charmander')
//                 .then((response) => {
//                   response.json()
//                     .then((data) => {
//                       appendPokemon(data);
//                       fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//                       .then((response) => {
//                         response.json()
//                           .then((data) => {
//                             appendPokemon(data);
//                           });
//                       });
//                     });
//                 });
//               });
//           });
//         });
//     });
// }
// fetchPokemon();

const getPokemon = () => {
  
};


const appendPokemon = (data) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.src = data.sprites.other.dream_world.front_default;
  li.innerHTML = `${data.name} <br> ${img.outerHTML}`;

  ul.appendChild(li);
}

const abilitiesHandle = (data) => {

}