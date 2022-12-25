const input = document.querySelector("#takeInput");
const button = document.querySelector(".button");
const result = document.getElementById("sum");

button.onclick = sumInput;

function sumInput(){
    let numbers = input.value;
    let numbersArray = numbers.split(",");
    let res = 0;

    for(let i = 0; i < numbersArray.length; i++){
        res += parseInt(numbersArray[i]);
    }

    result.value = res;
}