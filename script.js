'use strict';


function isNumber(n) { 
  return !isNaN(parseFloat(n)) && isFinite(n);
}


// Функция случайного числа
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Основная функция
function main() {
  let randomNumber = getRandomInt(1, 101);
  let question = confirm('Угадай число от 1 до 100?');  // Определяем хочет ли игрок играть
  let attempts = 10;  // Количество попыток

  function guess() {  // Функция угадывания 
    if (attempts === 0) {  // Если попытки закончились
      let questionConfirm = confirm('Попытки закончились, хотите сыграть еще?');
      if (questionConfirm) {
        return main();
      } else {
        return alert('Игра окончена');
      }
    } 

    function guessMechanism(value) {  // Функция сравнения ответа с загаданным числом
      attempts--;
      if (attempts === 0) {
        return true;
      }
      if (value > randomNumber) {
        alert(`Загаданное число меньше, осталось ${attempts} попыток`);
        return true;
        } else if (value < randomNumber) {
          alert(`Загаданное число больше, осталось ${attempts} попыток`);
          return true;
        } else if (value === randomNumber) {
          return false;
        } 
    } 
    
    let answer = prompt('Введите любое число от 1 до 100');
    if (answer === null) {  // Если пользователь нажимает отмена на любом этапе игра заканчивается
      return alert('Игра окончена');
    } else {
      if (isNumber(answer) && answer !== '0') {
        answer = +answer;
        if (guessMechanism(answer)) {
          guess();
        } else {
          let victory = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if (victory) {
            return main();
          } else {
            return alert('Игра окончена');
          }
          
        }
      } else {
        alert('Введи число!');
        guess();
      }
    }
  } 
      
  if (question) {
    return guess();
  } else {
    return alert('Игра окончена');
  }
}


main();
