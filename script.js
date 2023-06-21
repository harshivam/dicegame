function ludogame(){const dice1 = Math.floor(Math.random()*6)+1;
const play1dice = "images/dice"+dice1+".png"
document.getElementById("check1").setAttribute("src",play1dice);
const dice2 = Math.floor(Math.random()*6)+1;
const play2dice = "images/dice"+dice2+".png"
document.getElementById("check2").setAttribute("src",play2dice)
if(dice1===dice2){
    document.getElementById("h1tag").innerHTML = "it's a Draw"
}
else if(dice1>dice2){
    document.getElementById("h1tag").innerHTML = "Player 1 Won"
}
else{
    document.getElementById("h1tag").innerHTML = "Player 2 won"
}


} 