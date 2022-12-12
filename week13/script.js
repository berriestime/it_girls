function showGreating(){
    let name = prompt("Как тебя зовут?", '');
    alert(`Привет, ${name}!`);
}

function sum(){
    let a = prompt("a?", '');
    let b = prompt("b?", '');
    alert(parseInt(a) + +b);
}

function sub(){
    let a = prompt("a?", '');
    let b = prompt("b?", '');
    alert(parseInt(a) - +b); 
}

function mult(){
    let a = prompt("a?", '');
    let b = prompt("b?", '');
    alert(parseInt(a) * +b); 
}

function div(){
    let a = prompt("a?", '');
    let b = prompt("b?", '');
    alert(parseInt(a) / +b); 
}