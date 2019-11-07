//start game

window.onload = function() {
};

const birthday = {}
let num = 0
let $sign = document.querySelector('h2');
let $start = document.getElementById("start-button");
let $reset = document.getElementById("reset-button");
let $signbtn = document.getElementById("star-sign-button");
let $fire = document.getElementById("fire");
let $earth = document.getElementById("earth");
let $air = document.getElementById("air");
let $water = document.getElementById("water");
let $gem = document.getElementById("gem");
let $gemname = document.getElementById("gem-name");
let $traits = document.getElementById("traits");
let name = ""
const $canvas = document.querySelector('canvas');
let game;

console.dir(document.getElementById("sound-pic"))

let audio = new Audio("Solar Empire - Beneath The Stars (Atmospheric Ambient Mix) pt3.mp3")

document.getElementById("sound-pic").onclick = function() {
    if (document.getElementById("sound-pic").src === "http://127.0.0.1:5502/Game%20Images/speaker%20(2).png"){
        document.getElementById("sound-pic").src = "http://127.0.0.1:5502/Game%20Images/speaker%20(3).png"
        audio.pause()
    } else{
        document.getElementById("sound-pic").src = "http://127.0.0.1:5502/Game%20Images/speaker%20(2).png"
        audio.play()
    }

}


document.getElementById("star-sign-button").onclick = function() {
    audio.play().loop

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
    $fire.innerText = game.starsign.element.fire
    $earth.innerText = game.starsign.element.earth
    $air.innerText = game.starsign.element.air
    $water.innerText = game.starsign.element.water
    $gemname.innerText = game.starsign.element.name
    $traits.innerHTML = game.starsign.element.traits
    console.log(game.starsign.element)

    $gem.src = game.starsign.element.pic
    game.context.clearRect(0, 0, 500, 500);
    game.drawGrid()
    game.scoreboard.intro();
}



document.getElementById("start-button").onclick = function() {
    game.start();
    $start.style.display = "none"
  }

document.getElementById("reset-button").onclick = function() {
    game.reset();
    game.start();
  }