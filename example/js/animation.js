var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';

var frameCount = 0;

//Ne marche plus
registerAnimation(15, document.getElementById("source1"), 26, 256, 256,"goblin");
registerAnimation(30, document.getElementById("source"), 128,0,0,"bateau");
