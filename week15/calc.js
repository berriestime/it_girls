// Калькулятор
const dataA = document.getElementById('a');
const dataB = document.getElementById('b');
const dataRes = document.getElementById('res');

function sum(){
    const a = dataA.value;
    const b = dataB.value;
    const res = parseInt(a) + parseInt(b);
    dataRes.value = res;
}

function sub(){
    const a = dataA.value;
    const b = dataB.value;
    const res = parseInt(a) - parseInt(b);
    dataRes.value = res;
}

function mult(){
    const a = dataA.value;
    const b = dataB.value;
    const res = parseInt(a) * parseInt(b);
    dataRes.value = res;
}

function div(){
    const a = dataA.value;
    const b = dataB.value;
    if (parseInt(b) === 0){
        alert("На ноль делить нельзя!");
        dataRes.value = null;
        return;
    } 
    const res = parseInt(a) / parseInt(b);
    dataRes.value = res;
}