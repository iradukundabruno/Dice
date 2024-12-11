
var date = new Date();
document.getElementById("date").innerHTML= " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: <br> "  + date.getFullYear()+"/"+
(date.getMonth()+1)+"/"+ date.getDate() + " at " + date.getHours()+":"+date.getMinutes() ;


function rollDice(){

const xnumber = Math.floor(Math.random() * 6) + 1;
const xdice = "dice"+xnumber+ ".svg";
const ximage = "/images/"+xdice;

const image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src" , ximage);


const ynumber = Math.floor(Math.random() * 6) + 1;
const ydice = "dice"+ynumber+ ".svg";
const yimage = "/images/"+ydice;

const image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src" , yimage);

document.getElementById("total").innerHTML = xnumber + ynumber

const tot = xnumber + ynumber;

if ( tot < 8){
    document.querySelector("h3").innerHTML = "You didn't win: Try Again!"
}
else if(tot > 8){
    document.querySelector("h3").innerHTML = "You win: Try Again!"
}
}



const button = document.querySelector("button");
button.addEventListener("click", rollDice);