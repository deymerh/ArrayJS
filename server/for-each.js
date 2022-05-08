const letters = ['a', 'b', 'c', 'd'];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('Con un for: ', element);
}

letters.forEach(letter => console.log('Con un forEach ', letter));