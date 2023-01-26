while (true) {

    let randomNumber = Math.floor(Math.random()*1001);
    console.log('Загадано:', randomNumber);

    let userNumber = prompt('Введите число от 0 до 1000 (включительно) или "exit" для завершения.');
    console.log('Ответ:', +userNumber);

    if (userNumber === 'exit') {
        alert('До встречи!');
        break;
    }
    if (isNaN(userNumber) || (+userNumber < 0) || (+userNumber > 1000)) {
        alert('Введите число от 0 до 1000 или "exit" для звершения!');
    } else if (+userNumber === randomNumber) {
        alert('Вы угадали. Удача на вашей стороне, так держать!');
    } else {
        alert('Вы не угадали. Кто не падал, тот не поднимался, попробуйте ещё раз!');
    }
}