import Chart from "chart.js/auto";
// import { main } from "./api"; попытки получть json
const data = [
  {
    day: "Понедельник",
    amount: "4",
  },
  {
    day: "Вторник",
    amount: "6",
  },
  {
    day: "Среда",
    amount: "7",
  },
  {
    day: "Четверг",
    amount: "5",
  },
  {
    day: "Пятница",
    amount: "4",
  },
  {
    day: "Суббота",
    amount: "8",
  },
  {
    day: "Воскресенье",
    amount: "0",
  },
];
(async function () {
  // const data = await main(); попытки получть json

  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.day),
      datasets: [
        {
          label: "Съедено вкусней",
          data: data.map((row) => row.amount),
        },
      ],
    },
  });
})();
