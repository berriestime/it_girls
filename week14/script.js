function sum(){
    let dataA = document.getElementsByTagName('input')[0];
    let a = dataA.value;
    let dataB = document.getElementsByTagName('input')[1];
    let b = dataB.value;
    let res = +a + +b;
    let dataRes = document.getElementsByTagName('input')[2];
    dataRes.value = res;

}

function sub(){
    let dataA = document.getElementsByTagName('input')[0];
    let a = dataA.value;
    let dataB = document.getElementsByTagName('input')[1];
    let b = dataB.value;
    let res = +a - +b; 
    let dataRes = document.getElementsByTagName('input')[2];
    dataRes.value = res;
}

function mult(){
    let dataA = document.getElementsByTagName('input')[0];
    let a = dataA.value;
    let dataB = document.getElementsByTagName('input')[1];
    let b = dataB.value;
    let res = +a * +b; 
    let dataRes = document.getElementsByTagName('input')[2];
    dataRes.value = res;
}

function div(){
    let dataA = document.getElementsByTagName('input')[0];
    let a = dataA.value;
    let dataB = document.getElementsByTagName('input')[1];
    let b = dataB.value;
    let res = +a / +b; 
    let dataRes = document.getElementsByTagName('input')[2];
    dataRes.value = res;
}

function select(sender){
    sender.classList.add("selected");
}

let data = ["./assets/img/first.png", "./assets/img/second.jpeg", "./assets/img/third.jpeg"];
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