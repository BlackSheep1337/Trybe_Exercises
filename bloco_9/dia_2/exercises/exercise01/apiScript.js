const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return new Promise((resolve, reject) => {
    const showJoke = document.getElementById('jokeContainer');
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
  
    fetch(API_URL, myObject)
      .then((r) => {
        r.json()
          .then((j) => {
            showJoke.innerHTML = j.joke;
            resolve();
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error))
  })

};










window.onload = () => fetchJoke();
