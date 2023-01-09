function randomInteger() {
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(-10 + Math.random() * 21);
  }
  document.querySelector("#random").value = numbers;
  document.querySelector("#min").value = Math.min(...numbers);
  document.querySelector("#max").value = Math.max(...numbers);
  let sum = 0;
  let product = 0;
  for (let i = 0; i < 10; i++) {
    sum += numbers[i];
    product *= numbers[i];
  }
  document.querySelector("#average").value = sum / 10;
  document.querySelector("#sum").value = sum;
  document.querySelector("#product").value = product;
}
