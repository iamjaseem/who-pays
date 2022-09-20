// player names
var player1= prompt("Please enter player 1 Name");
var player2= prompt("Please enter player 2 name");
document.querySelectorAll("p")[0].innerHTML=player1;
document.querySelectorAll("p")[1].innerHTML=player2;
// player1
var randomNo1 = Math.floor(Math.random()*6)+1;    //generates rndm number
var randomImg1="images/dice"+randomNo1+".png"; //generates random dice- images/dice(1-6).png

var img1=document.querySelectorAll("img")[0]; //selects the first image,dice6.png from html

img1.setAttribute("src",randomImg1);

// player2
var randomNo2 = Math.floor(Math.random()*6)+1;    //generates rndm number
var randomImg2="images/dice"+randomNo2+".png"; //generates random dice- images/dice(1-6).png

var img2=document.querySelectorAll("img")[1]; //selects the 2nd img from img tag,dice6.png from html

img2.setAttribute("src",randomImg2);

// to decide who wins

if(randomNo1>randomNo2){
  document.querySelector("h1").innerHTML=player1+" Should pay🤑";
}
else if(randomNo1<randomNo2){
  document.querySelector("h1").innerHTML=player2+" Should pay🤑";
}
else {
  document.querySelector("h1").innerHTML= "It'S a tie, Go Again!😥";
}
