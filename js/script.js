function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

var rand = randomInteger(0, 10);

var userNum = document.getElementById('userNum');
var check = document.getElementById('check');

check.onclick = function() {
    var num = userNum.value;
    num = parseInt(num);

    if (rand == num) {
        alert('Поздравляю! Вы угадали!');
    } else if (rand < num) {
        alert('Вы не угадали! Число меньше. Попробуй ещё раз!');
    } else if (rand > num) {
        alert('Вы не угадали! Число больше. Попробуй ещё раз!');
    } else {
        alert('Вы не указали число!');
    };
};