const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
      response.json()
        .then((data) => {
          imageHandle(data);
          abilitiesHandle(data);
        });
    });
}
fetchPokemon(); 

const imageHandle = (data) => {
  const img = document.createElement('img');
  const elem = document.getElementById('pokemon');
  img.setAttribute('src', data.sprites.front_shiny);
  elem.appendChild(img);
}

const abilitiesHandle = (data) => {
  
}