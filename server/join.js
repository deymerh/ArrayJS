const elements = ['Fire', 'Air', 'Water'];
const title = 'Curso de manupulación de arrays';
const response = elements.join(' - ');
const titleFinally = title.split(' ').join('-').toLocaleLowerCase();
console.log(response);
console.log(titleFinally);
