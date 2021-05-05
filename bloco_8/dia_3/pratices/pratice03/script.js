const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// const estudantesManha = [];

// for (let i in estudantes) {
//   if (estudantes[i].turno === 'Manhã') {
//     estudantesManha.push(`${estudantes[i].nome} ${estudantes[i].sobrenome}`);
//   }
// }

// console.log(estudantesManha);

// const matinal = estudantes.filter((person) => person.turno === 'Manhã')
//   .map((person) => `${person.nome} ${person.sobrenome}`);

// console.table(matinal);

// const findStudent = (name, students) => {
//   for (let i in students) {
//     if (students[i].nome === name) return students[i];
//   }
// }

// const reportStatus = (student) => {
//   const report = [];
//   for (let i in student.materias) {
//     if (student.materias[i].nota >= 60) {
//       report.push(`${student.materias[i].name} Aprovado`);
//     } else {
//       report.push(`${student.materias[i].name} Reprovado`);
//     }
//   }
//   return report;
// }

// console.log(reportStatus(findStudent('Natalia', estudantes)));

const reportStatus = (name, students) => {
  const studentInfo = students.find((student) => (student.nome === name));
  return studentInfo.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
}

console.table(reportStatus('Jorge', estudantes));