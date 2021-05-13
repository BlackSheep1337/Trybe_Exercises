const appendPokemon = (data) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.src = data.sprites.other.dream_world.front_default;
  li.innerHTML = `${data.name} <br> ${img.outerHTML}`;

  ul.appendChild(li);
}

// const getPokemon = (pokemonName, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => {
//       response.json().then((data) => {
//         appendPokemon(data);
//         callback ? callback() : undefined;
//       })
//     });
// };

// const fetchPokemon = () => {
//   getPokemon('pikachu', 
//   getPokemon('charmander'),
//   getPokemon('squirtle'),
//   getPokemon('bulbasaur'));
// }

const getPokemonPromise = (pokemonName) => {
  return new Promise((resolve, reject) => {
    if (pokemonName === 'zubat') {
      reject('Erro, pokemon foda!!');
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        response.json().then((data) => {
          appendPokemon(data);
          resolve();
        });
      })
    }
  })
};

const fetchPokemon = async () => {
  try {
    await getPokemonPromise('pikachu');
    await getPokemonPromise('bulbasaur');
    await getPokemonPromise('charizard');
    await getPokemonPromise('zubat');

  } catch(error) {
    console.log(error);
  }
}


window.onload = fetchPokemon();