const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

// El método find() devuelve el primer elemento del array que cumpla con la condición dada o no devuelve undefined si no encuentra ninguno que cumpla con la condicion
// findIndex va a retonar la posicion de ese objeto dentro del array en caso de no encontar nada va a retornar un -1

const response = products.find((item)=>item.price === 355);
const responseId = products.findIndex((item)=>item.id === '🥞');
console.log(response);
console.log(responseId);