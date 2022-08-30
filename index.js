var randomNumber1 = Math.floor(Math.random() * 6 + 1);  /*Numbers from 1-6. Generating any random number from 0-no point 99...
and multiplying that number by 6 to get random numbers from 0-5.99....then rounding the number to the nearest whole number
that becomes 0-5 and by adding 1 we get random numbers from 6.*/
var randomDiceImage = "dice" + randomNumber1 + ".png";//this is a string that is from dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];// to get the 1st image we have to specify the index 0 [0]
image1.setAttribute("src", randomImageSource);//change the source of the image by adding "src".

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player 1 wins or if player 2 wins
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!🚩";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!🏁";
}
