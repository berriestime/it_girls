const btn = document.querySelector("#btn");
const brandsCar = document.querySelector("#brand-car-select");
const modelsCar = document.querySelector("#model-car-select");
const yearsOfIssue = document.querySelector("#year-of-issue");
const generation = document.querySelector("#generation");
const modification = document.querySelector("#modification");
const bodyType = document.querySelector("#body-type");
const equipmentLevel = document.querySelector("#equipment-level");
const mileage = document.querySelector("#mileage");

const modelsAudi = document.querySelectorAll(".audi-model");
const modelsBMW = document.querySelectorAll(".BMW-model");
const modelsFord = document.querySelectorAll(".ford-model");
const modelsKia = document.querySelectorAll(".kia-model");
const modelsMercedesBenz = document.querySelectorAll(".merce-model");

brandsCar.addEventListener("change", (e) => {
  e.preventDefault();
  const selectedValue = brandsCar.value;

  if (brandsCar.value == 1) {
    modelsCar.disabled = true;
  } else {
    modelsCar.disabled = false;
  }

  document
    .querySelectorAll("#model-car-select .d-block")
    .forEach((x) => x.classList.remove("d-block"));

  switch (selectedValue) {
    case "Audi":
      for (model of modelsAudi) {
        model.classList.add("d-block");
      }
      break;
    case "BMW":
      for (model of modelsBMW) {
        model.classList.add("d-block");
      }
      break;
    case "Ford":
      for (model of modelsFord) {
        model.classList.add("d-block");
      }
      break;
    case "Kia":
      for (model of modelsKia) {
        model.classList.add("d-block");
      }
      break;
    case "Mercedes-Benz":
      for (model of modelsMercedesBenz) {
        model.classList.add("d-block");
      }
      break;
  }
});

modelsCar.addEventListener("change", (e) => {
  e.preventDefault();

  if (modelsCar.disabled == 1) {
    yearsOfIssue.disabled = true;
  } else {
    yearsOfIssue.disabled = false;
  }
  for (year of yearsOfIssue) {
    model.classList.add("d-block");
  }
});

yearsOfIssue.addEventListener("change", (e) => {
  e.preventDefault();

  if (yearsOfIssue.disabled == 1) {
    generation.disabled = true;
  } else {
    generation.disabled = false;
  }
  for (gen of generation) {
    gen.classList.add("d-block");
  }

  if (yearsOfIssue.disabled == 1) {
    modification.disabled = true;
  } else {
    modification.disabled = false;
  }
  for (gen of modification) {
    gen.classList.add("d-block");
  }
});

modification.addEventListener("change", (e) => {
  e.preventDefault();

  if (modification.disabled == 1) {
    bodyType.disabled == true;
  } else {
    bodyType.disabled = false;
  }
  for (body of bodyType) {
    gen.classList.add("d-block");
  }
});

bodyType.addEventListener("change", (e) => {
  e.preventDefault();

  if (bodyType.disabled == 1) {
    equipmentLevel.disabled == true;
  } else {
    equipmentLevel.disabled = false;
  }
  for (equip of equipmentLevel) {
    gen.classList.add("d-block");
  }
});

btn.onclick = () => calcCost();

function calcCost() {
  let sum = 0;
  sum =
    parseInt(modelsCar.value) +
    parseInt(yearsOfIssue.value) +
    parseInt(generation.value) +
    parseInt(bodyType.value) * parseInt(equipmentLevel.value) -
    parseInt(mileage.value);
  const cost = document.querySelector("#cost");
  cost.value = sum;
}
