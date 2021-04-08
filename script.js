'use strict';


function isNumber(n) { 
  return !isNaN(parseFloat(n)) && isFinite(n);
}


// Функция случайного числа
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function main() {
  let randomNumber = getRandomInt(1, 101);
  let question = confirm('Угадай число от 1 до 100?');

  function guess() {
    function guessMechanism(value) {
      if (value > randomNumber) {
        alert('Загаданное число меньше');
        return true;
        } else if (value < randomNumber) {
          alert('Загаданное число больше');
          return true;
        } else if (value === randomNumber) {
          alert('Поздравляю, Вы угадали!!!');
        }
    } 
  
    let answer = prompt('Введите любое число от 1 до 100');
    if (answer === null) {  // Если пользователь нажимает отмена на любом этапе игра заканчивается
      return alert('Игра окончена');
    } else {
      if (isNumber(answer)) {
        answer = +answer;
        if (guessMechanism(answer)) {
          guess();
        } else {
          return alert('Игра окончена');
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
