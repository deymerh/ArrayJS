const numbers = [1, 2, 3, 4, 5];
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
//with a for
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  sum = sum + element
}
// with a reduce
const total = numbers.reduce((number, item) => number + item, 5);
const totalPriceOrders = orders.reduce((pricesOrderInit, order) => pricesOrderInit + order.total, 400); // 1000
console.log(sum)
console.log(total)
console.log(totalPriceOrders)