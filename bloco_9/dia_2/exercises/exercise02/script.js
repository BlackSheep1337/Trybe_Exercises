const plusEightThunsand = (term) => {
  return new Promise((resolve, rejected) => {
    const myObj = { method: 'GET', headers: { 'Accept': 'application/json' }}
    const API_URL = `https://icanhazdadjoke.com/`;
    const li = document.createElement('li');
    const ul = document.getElementById('lista');

    fetch(API_URL, myObj)
      .then((r) => {
        r.json()
          .then((j) => {
            li.innerHTML = j.joke;
            ul.appendChild(li);
            resolve()
          })
          .catch((error) => rejected(error));
      })
      .catch((error) => rejected(error));
  })
}

plusEightThunsand();