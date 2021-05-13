

async function show8k() {
  const myObj = {method: 'GET',headers: { 'Accept': 'application/json' }};
  const API_URL = `https://icanhazdadjoke.com/`;
  try {
    const response = await fetch(API_URL, myObj);
    const json = await response.json();
    elementCreatHandler(json);
  } catch (error) {
    console.log(error);
  }
}
show8k();


const elementCreatHandler = (json) => {
  const li = document.createElement('li');
  const ul = document.getElementById('lista');
  li.innerHTML = json.joke;
  ul.appendChild(li);
}