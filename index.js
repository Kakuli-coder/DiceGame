// Dice 1
var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomDiceImgSource1 = "images/dice" + randomNumber1 + ".png"

var randomDiceImg1 = document.querySelector(".img1").setAttribute("src", randomDiceImgSource1);
// Dice 1 ends

// Dice 2
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
var randomDiceImgSource2 = "images/dice" + randomNumber2 + ".png"

var randomDiceImg2 = document.querySelector(".img2").setAttribute("src", randomDiceImgSource2);
// Dice 2 ends

// Result
function result() {
    if (randomNumber1 < randomNumber2) {
        return document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
    }
    else if (randomNumber1 > randomNumber2) {
        return document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
    }
    else {
        return document.querySelector("h1").innerHTML = "Draw!"
    }
}

result();
// Result ends
