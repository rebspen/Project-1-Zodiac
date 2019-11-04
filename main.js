//start game

window.onload = function() {

};

const birthday = {}
let num = 0
const $canvas = document.querySelector('canvas');
let game;
    
console.log(birthday);

document.getElementById("star-sign-button").onclick = function() {
    birthday.month = document.getElementById("date").valueAsDate.getMonth()
    birthday.date = document.getElementById("date").valueAsDate.getDate()

    console.log(birthday);

    if(birthday.month === 2 && birthday.date >= 21 || birthday.month === 3 && birthday.date <= 19 ){
        num = 1;
    } else if (birthday.month === 3 && birthday.date >= 20 || birthday.month === 4 && birthday.date <= 20 ){
        num = 2;
    } else if (birthday.month === 4 && birthday.date >= 21 || birthday.month === 5 && birthday.date <= 20 ){
        num = 3;
    } else if (birthday.month === 5 && birthday.date >= 21 || birthday.month === 6 && birthday.date <= 22 ){
        num = 4;
    } else if (birthday.month === 5 && birthday.date >= 23 || birthday.month === 7 && birthday.date <= 22 ){
        num = 5;
    } else if (birthday.month === 7 && birthday.date >= 22 || birthday.month === 8 && birthday.date <= 22 ){
        num = 6;
    } else if (birthday.month === 8 && birthday.date >= 23 || birthday.month === 9 && birthday.date <= 22 ){
        num = 7;
    } else if (birthday.month === 9 && birthday.date >= 23 || birthday.month === 10 && birthday.date <= 21 ){
        num = 8;
    } else if (birthday.month === 10 && birthday.date >= 22 || birthday.month === 11 && birthday.date <= 21 ){
        num = 9;
    } else if (birthday.month === 11 && birthday.date >= 22 || birthday.month === 1 && birthday.date <= 19 ){
        num = 10;
    } else if (birthday.month === 5 && birthday.date >= 20 || birthday.month === 7 && birthday.date <= 18 ){
        num = 11;
    } else {
        num = 12;
    }

    console.log(num)
    game =  new Game($canvas, num);   
}



document.getElementById("start-button").onclick = function() {
    console.log(birthday);
    game.start();
  }