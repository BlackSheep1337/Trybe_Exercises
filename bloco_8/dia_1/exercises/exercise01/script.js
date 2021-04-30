const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const employ = (str) => {
  const email = str.toLowerCase().replace(' ', '_');
  return {fullName: str, email: `${email}@trybe.com`}
}

console.table(newEmployees(employ));
