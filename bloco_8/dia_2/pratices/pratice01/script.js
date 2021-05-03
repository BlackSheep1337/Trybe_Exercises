const students2 = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let i = 0; i < students2.length; i += 1) {
    const student = students2[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
  const name = 'name';
  students2.sort((a,b) => a[name] > b[name]);
}

verifyGrades();

console.table(students2);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }


const students = [
  {name: 'Marcelo', grade: 70, approved: ''},
  {name: 'Railda', grade: 70, approved: ''},
  {name: 'Joao', grade: 50, approved: ''},
  {name: 'Alexandre', grade: 40, approved: ''}
];

const verifyApproved = () => {
  students.forEach((student) => {
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperacao';
    }
  });
  students.sort((a, b) => a.name > b.name);

  console.table(students);
}
verifyApproved();





