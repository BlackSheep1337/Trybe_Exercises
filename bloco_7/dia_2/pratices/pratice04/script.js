var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj));

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj));

var obj_ea = {a: 5, b: 7, c: 9};
// for (var [key, value] of Object.entries(obj)) {
//     console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
// }

// Ou, usando array extras
Object.entries(obj_ea).forEach(([key, value]) => {
  console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
});
var obj_map = { foo: 'bar', baz: 42 };
var map = new Map(Object.entries(obj_map));
console.log(map); 

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};