const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
    .then((response) => {
      response.json()
        .then((data) => {
          imageHandle(data);
          abilitiesHandle(data);
          
          fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
          .then((response) => {
            response.json()
              .then((data) => {
                imageHandle(data);
                abilitiesHandle(data)
                
                fetch('https://pokeapi.co/api/v2/pokemon/charmander')
                .then((response) => {
                  response.json()
                    .then((data) => {
                      imageHandle(data);
                      abilitiesHandle(data)
                      
                    });
                });
              });
          });
        });
    });
}
fetchPokemon(); 

const imageHandle = (data) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.src = data.sprites.other.dream_world.front_default;
  li.innerHTML = `${data.name} <br> ${img.outerHTML}`;

  ul.appendChild(li);
}

const abilitiesHandle = (data) => {

}