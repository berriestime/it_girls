const dataA = document.getElementsByTagName('input')[0];
const dataB = document.getElementsByTagName('input')[1];
const dataRes = document.getElementsByTagName('input')[2];

function sum(){
    const a = dataA.value;
    const b = dataB.value;
    const res = +a + +b
    dataRes.value = res;
}

function sub(){
    const a = dataA.value;
    const b = dataB.value;
    const res = +a - +b;
    dataRes.value = res;
}

function mult(){
    const a = dataA.value;
    const b = dataB.value;
    const res = +a * +b;
    dataRes.value = res;
}

function div(){
    const a = dataA.value;
    const b = dataB.value;
    const res = +a / +b;
    dataRes.value = res;
}

function select(sender){
    sender.classList.add("selected");
}

const data = ["./assets/img/first.png", "./assets/img/second.jpeg", "./assets/img/third.jpeg"];
let i = 0;

function next(){
    i += 1;
    if(i > 2){
        i = 0;
    }
    document.querySelector('.pictures').src = data[i];
}

function prev(){
    i -= 1;
    if(i < 0){
        i = 2;
    }
    document.querySelector('.pictures').src = data[i];
}