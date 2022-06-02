const numbers = [1, 2, 3, 4, 5, 30, 40, 10, 13, 40];

const response = numbers.every((item) => item <= 40);

console.log(response);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];
const AGE =  15;
const responseTeamsAge = team.every((item)=>item.age > AGE);
console.log('responseTeamsAge', responseTeamsAge);
if(!responseTeamsAge){
  console.log('Equipo NO admitido')
}else{
  console.log('Equipo admitido!');
}