let arr = ["js", "css", "html"];
console.log("1 элемент массива:" + arr[0]);

let arr2 = [0, 1, false, 2, undefined, "", 3, null];
let res = arr2.filter((num) => Number.isInteger(num) && num != 0);
console.log("Отфильтрованный массив: " + res);

let arr3 = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];

function checkLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    if (arr[i].length > 3) {
      return i;
    }
  }
}

console.log("Индекс элемента массива с длиной > 3: " + checkLength(arr3));
