//start game

window.onload = function() {

};

const birthday = {}
let num = 0
let $sign = document.querySelector('h2');
let $start = document.getElementById("start-button")
let $reset = document.getElementById("reset-button")
let $signbtn = document.getElementById("star-sign-button")
let name = ""
const $canvas = document.querySelector('canvas');
let game;

console.log($start) 
console.dir($start)    


document.getElementById("star-sign-button").onclick = function() {
    birthday.month = document.getElementById("date").valueAsDate.getMonth()
    birthday.date = document.getElementById("date").valueAsDate.getDate()

    $reset.style.display = "none"

    if(birthday.month === 2 && birthday.date >= 21 || birthday.month === 3 && birthday.date <= 19 ){
        num = 1;
        name = "Aries";
    } else if (birthday.month === 3 && birthday.date >= 20 || birthday.month === 4 && birthday.date <= 20 ){
        num = 2;
        name = "Taurus";
    } else if (birthday.month === 4 && birthday.date >= 21 || birthday.month === 5 && birthday.date <= 20 ){
        num = 3;
        name = "Gemini";
    } else if (birthday.month === 5 && birthday.date >= 21 || birthday.month === 6 && birthday.date <= 22 ){
        num = 4;
        name = "Cancer";
    } else if (birthday.month === 5 && birthday.date >= 23 || birthday.month === 7 && birthday.date <= 22 ){
        num = 5;
        name = "Leo";
    } else if (birthday.month === 7 && birthday.date >= 22 || birthday.month === 8 && birthday.date <= 22 ){
        num = 6;
        name = "Virgo"
    } else if (birthday.month === 8 && birthday.date >= 23 || birthday.month === 9 && birthday.date <= 22 ){
        num = 7;
        name = "Libra";
    } else if (birthday.month === 9 && birthday.date >= 23 || birthday.month === 10 && birthday.date <= 21 ){
        num = 8;
        name = "Scorpio";
    } else if (birthday.month === 10 && birthday.date >= 22 || birthday.month === 11 && birthday.date <= 21 ){
        num = 9;
        name = "Sagittarius";
    } else if (birthday.month === 11 && birthday.date >= 22 || birthday.month === 1 && birthday.date <= 19 ){
        num = 10;
        name = "Capricorn";
    } else if (birthday.month === 5 && birthday.date >= 20 || birthday.month === 7 && birthday.date <= 18 ){
        num = 11;
        name = "Aquarius";
    } else {
        num = 12;
        name = "Pisces";
    }
    game =  new Game($canvas, num);  
    $sign.innerText = name
    $start.style.display = "block"

}



document.getElementById("start-button").onclick = function() {
    game.start();
    $start.style.display = "none"
  }

document.getElementById("reset-button").onclick = function() {
    game.reset();
    game.start();
  }