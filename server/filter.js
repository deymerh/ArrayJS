const words = ['spray', 'limit', 'elite', 'exuberant'];
const wordsWithLetterGreatterThatSix = [];

for (let i = 0; i < words.length; i++) {
  const item = words[i];
  if (item.length >= 6) {
    wordsWithLetterGreatterThatSix.push(item);
  }
}

console.log(words);
console.log(wordsWithLetterGreatterThatSix);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const search = (wordsOfSearch) => {
  return orders.filter(item => {
    return item.customerName.includes(wordsOfSearch);
  })
}
console.log(search('len'));