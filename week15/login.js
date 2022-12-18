function checkForm(){
    let errorCounter = 0;

    errorCounter += checkNotEmpty('firstName', 'errorMessageFirstName', 'Укажите, пожалуйста, имя');
    errorCounter += checkNotEmpty('secondName', 'errorMessageSecondName', 'Укажите, пожалуйста, фамилию');
    errorCounter += checkNotEmpty('login', 'errorLogin', 'Необходимо выбрать логин');
    errorCounter += checkNotEmpty('passwordFirst', 'errorPasswordFirst', 'Необходимо выбрать пароль');
    errorCounter += checkNotEmpty('passwordSecond', 'errorPasswordSecond', 'Необходимо ввести пароль еще раз');
    errorCounter += checkNotEmpty('phoneNumber', 'errorPhoneNumber', 'Пожалуйста, укажите номер телефона');
    errorCounter += checkTwoPasswords();

    if (errorCounter == 0){
        alert(`Добро пожаловать, ${document.getElementById('firstName').value}`);
    }
}

function checkNotEmpty(id, idError, messageError){
    let firstName = document.getElementById(id);
    document.getElementById(idError).innerHTML = '';
    if(firstName.value == ''){
        document.getElementById(idError).innerHTML+=messageError;
        return 1;
    }
    return 0;
}

function checkTwoPasswords(){
    let firstPassword = document.getElementById('passwordFirst');
    let secondPassword = document.getElementById('passwordSecond');
    document.getElementById('errorPasswordFirst').innerHTML = '';
    if(firstPassword.value != secondPassword.value){
        document.getElementById('errorPasswordFirst').innerHTML+="Пароли не совпадают";
        return 1;
    }
    return 0;
}

/*THEME*/

function theme(){
    console.log(document.getElementById('theme').value);
    switch(document.getElementById('theme').value){
        case "light": 
            break;
        case "dark":
            document.getElementsByTagName('body')[0].className = 'dark';
            break;
        case "blue":
            break;
    }
}