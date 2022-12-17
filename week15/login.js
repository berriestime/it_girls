function check(){
    let errorCounter = 0;

    errorCounter += validator('firstName', 'errorMessageFirstName', 'Укажите, пожалуйста, имя');
    errorCounter += validator('secondName', 'errorMessageSecondName', 'Укажите, пожалуйста, фамилию');

    if (errorCounter == 0){
        alert('Welcome!');
    }
}

function validator(id, idError, messageError){
    let firstName = document.getElementById(id);
    document.getElementById(idError).innerHTML = '';
    if(firstName.value == ''){
        document.getElementById(idError).innerHTML+=messageError;
        return 1;
    }
    return 0;
}