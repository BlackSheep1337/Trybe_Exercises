var data = [
  {
    name: "Jan Dodonna",
    title: "General",
  },
  {
    name: "Gial Ackbar",
    title: "Admiral",
  },
]

const halfData = data.map((person) => (
  `${person.title}  ${person.name.split(' ').slice(-1)}`
))

console.log(halfData);

