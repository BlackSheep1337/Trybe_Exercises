const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 01
function addNewKey(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addNewKey(lesson2, 'turno', 'tarde'));

// 02
const keys = (obj) => Object.keys(obj);
console.log(keys(lesson1));

// 03
const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson1));

// 04
const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));

// 05
const allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
console.table(allLessons);

// 06
function amountOfStudents(obj) {
  const values = Object.values(obj);
  const students = 'numeroEstudantes';
  let amount = 0, i;
  for (i in values) {
    amount += values[i][students];
  }
  return amount;
}
console.log(amountOfStudents(allLessons));

// 07
const getValueByNumber = (obj, value) => Object.entries(obj)[value].pop();
console.log(getValueByNumber(lesson2, 0));

// 08
const verifyPair = (obj, key, value) => obj.hasOwnProperty(key) && value === obj[key]
console.log(verifyPair(lesson3, 'turno', 'noite'));

// 09 - bonus
const mathStudents = (obj) => {
  const values =  Object.values(obj);
  let count = 0, i;
  for (i in values) {
    if (values[i].materia === 'Matemática') {
      count += values[i].numeroEstudantes;
    } 
  }
  return count;
}
console.log(mathStudents(allLessons));

// 10 - bonus
const createReport = (obj, teach) => {
  const values = Object.values(obj);
  const teachValues = {};
  const arr = [];
  let i, count = 0;
  for (i in values) {
    if (values[i].professor === teach) {
      teachValues.professor = values[i].professor;
      arr.push(values[i].materia);
      count += values[i].numeroEstudantes;
      teachValues.aulas = arr;
      teachValues.estudantes = count;
    }
  } 
  return teachValues;
}
console.log(createReport(allLessons, 'Maria Clara'));
