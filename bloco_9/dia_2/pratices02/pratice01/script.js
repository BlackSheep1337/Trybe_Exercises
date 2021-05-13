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
  img.src = data.sprites.front_default;
  elem.innerHTML = `${data.name} <br> ${img.outerHTML}`;
}

const abilitiesHandle = (data) => {

}