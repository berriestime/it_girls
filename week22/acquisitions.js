import Chart from "chart.js/auto";

const url = "./tasks.json";

const data = [
  {
    day: "Sunday",
    amount: "4",
  },
  {
    day: "Monday",
    amount: "6",
  },
  {
    day: "Tuesday",
    amount: "7",
  },
  {
    day: "Wednesday",
    amount: "5",
  },
  {
    day: "Thursday",
    amount: "4",
  },
  {
    day: "Friday",
    amount: "8",
  },
  {
    day: "Sutarday",
    amount: "0",
  },
];

(async function () {
  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.day),
      datasets: [
        {
          label: "Weekly activity",
          data: data.map((row) => row.amount),
        },
      ],
    },
  });
})();
