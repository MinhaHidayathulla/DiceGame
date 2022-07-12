//----------------------to change 1 st image randomly----------------------
var number1=Math.random();
number1=number1*6;
number1=Math.floor(number1)+1;

var imageSourse1="images/dice" + number1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imageSourse1);
// --------------------------to change second image randomly---------------------
var number2=Math.random();
number2=number2*6;
number2=Math.floor(number2)+1;

var imageSource2="images/dice" + number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

//---------to get the winner tag----------
if(number1 > number2){
  document.querySelector("h1").innerHTML = "Palyer 1 wins! 🎉 ";
}
else if (number2 > number1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🎊";
}else{
  document.querySelector("h1").innerHTML = "Draw! 🎃";
}
