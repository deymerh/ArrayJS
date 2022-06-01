const numbers = [1, 7, 3, 5];

let response =  false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element % 2 === 0){
    response = true;
    break;
  }
}
console.log(response);
const responseTwo = numbers.some((item)=>item % 2 === 0);
console.log(responseTwo);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: false,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: false,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: false,
  },
];

const delivered = orders.some((item)=>item.delivered);
console.log(delivered);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate)=>{
  return dates.some((date)=>{
    return areIntervalsOverlapping(
      {start: date.startDate, end: start.end},
      {start: newDate.startDate, end: newDate.end},
    )
  })
}
console.log('isOverlap: ', isOverlap(newAppointment));