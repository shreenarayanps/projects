var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var source1 = "./images/" + randomDiceImage1;

document.querySelector(".img1").setAttribute("src",source1);


///////////////////////////////////////////////////////////////


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var source2 = "./images/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src",source2);

//////////////////////////////////////////////////////////////////


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw 🚩"; 
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}