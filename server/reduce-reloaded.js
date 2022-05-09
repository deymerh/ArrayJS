const numbers = [1, 5, 3, 4, 5];
const objNumbers = numbers.reduce((objInit, number) => {
  if (!objInit[number]) {
    objInit[number] = 1;
  } else {
    objInit[number] = objInit[number] + 1;
  }
  return objInit
}, {});

const users = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const objectCountLevels = users
  .map(user => user.level)
  .reduce((objectOfUserInit, user) => {
    if (!objectOfUserInit[user]) {
      objectOfUserInit[user] = 1;
    } else {
      objectOfUserInit[user] = objectOfUserInit[user] + 1;
    }
    return objectOfUserInit;
  }, {});

console.log(objectCountLevels);