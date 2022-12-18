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
        const name = document.getElementById('firstName');
        alert(`Добро пожаловать, ${name.value}`);
    }
}

function checkNotEmpty(id, idError, messageError){
    const error = document.getElementById(idError);
    const firstName = document.getElementById(id);

    error.innerHTML = '';
    if(firstName.value == ''){
        error.innerHTML+=messageError;
        return 1;
    }
    return 0;
}

function checkTwoPasswords(){
    const firstPassword = document.getElementById('passwordFirst');
    const secondPassword = document.getElementById('passwordSecond');
    const error = document.getElementById('errorPasswordFirst');
    error.innerHTML = '';
    if(firstPassword.value != secondPassword.value){
        error.innerHTML+="Пароли не совпадают";
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