const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damageStr: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damageStr: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damageStr: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = (caracter) =>  {
  const max = caracter.strength;
  const min = 15;

  const dmg = Math.floor((Math.random() * (max - min)) + min);
  return `nao pode ser menor que quinze e maior que cinquenta ${dmg}`;
}
const warriorDmg = (caracter) => {
  const max = caracter.strength * caracter.weaponDmg;
  const min = caracter.strength;

  const dmg = Math.floor((Math.random() * (max - min)) + min);
  return `nao pode ser menor que trinta e maior que sessenta ${dmg}`;
} 



const mageAttack = (caracter) => {
  let mana = caracter.mana;
  let spentMana;
  
  if (mana > 15) {
    spentMana += 15;
  }
  
  return spentMana;
};

console.log(dragonDmg(dragon));
console.log(warriorDmg(warrior));
console.log(mageAttack(mage));
