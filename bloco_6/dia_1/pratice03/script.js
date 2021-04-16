function addUf() {
  const element = document.getElementById('input-estado');
  const array = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  for (let i = 0; i < array.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = array[i];
    element.appendChild(option);
  }
}
addUf();

function submitForm(e) {
  //se algum dos quesitos nao bater, execute essa funcao!
  e.preventDefault();  
}

function clearAllCamps(e) {
  
}