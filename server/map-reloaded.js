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

console.log(orders);
const totalOrders = orders.map((item) => item.total);
const totalCustomersNames = orders.map((item) => item.customerName);
const totalOrdersWithTax = orders.map((item) => {
  return {
    ...item,
    tax: .19
  }
});
const totalordersDelivered = orders.filter((item) => item.delivered === true).length;
console.log('totalOrders: ', totalOrders);
console.log('totalCustomersNames: ', totalCustomersNames);
console.log('totalOrdersWithTax: ', totalOrdersWithTax);
console.log('totalordersDelivered: ', totalordersDelivered);