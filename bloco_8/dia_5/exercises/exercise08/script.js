const assert = require('assert');

// escreva greet abaixo
const greet = (name, msg = 'Hi') => `${msg} ${name}`; 

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');


const bbbParticipants = {
  participant1: {
    name: 'Alexandre',
    lastName: 'Pereira',
    profetion: 'Programmer',
    likes: ['Programming', 'Video Game', 'Movies']
  },
  participant2: {
    name: 'Railda',
    lastName: 'Brandao',
    profetion: 'Marketing digital',
    likes: ['Party', 'Movies', 'Catolic']
  },
  participant3: {
    name: 'Maisa',
    lastName: 'Sousa',
    profetion: 'Secretaria',
    likes: {
      movies: 'netflix',
      party: 'Gay community',
      partes: 'Xereca'
    }
  },
}
// const { name, lastName, likes, family } = bbb;

// console.log(`${name} ${lastName} Tem gostos estranhos que sao: ${likes} filho de ${family.mae} com ${family.pai}`);

const bbb = ({participant2: { name, lastName, profetion, likes:[ movies, party, partes ] }, participant2, participant3 }) => `${name} ${lastName} ${profetion} ${movies} ${party} ${partes}`;
console.log(bbb(bbbParticipants));