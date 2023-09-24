const crash = new Audio("sounds/crash.mp3");
const kick = new Audio("sounds/kick.mp3");
const snare = new Audio("sounds/snare.mp3");
const tom1 = new Audio("sounds/tom1.mp3");
const tom2 = new Audio("sounds/tom2.mp3");
const tom3 = new Audio("sounds/tom3.mp3");
const tom4 = new Audio("sounds/tom4.mp3");

document.getElementById("crash").onclick = function(){
    crash.play();
}
document.getElementById("kick").onclick = function(){
    kick.play();
}
document.getElementById("snare").onclick = function(){
    snare.play();
}
document.getElementById("tom1").onclick = function(){
    tom1.play();
}
document.getElementById("tom2").onclick = function(){
    tom2.play();
}
document.getElementById("tom3").onclick = function(){
    tom3.play();
}
document.getElementById("tom4").onclick = function(){
    tom4.play();
}