var c1=(0,0,0);
var c2=(0,0,0);
var cflag=0|1;

const button1={'btn blue': '0,0,255'};
const button2={'btn yellow': '255,255,0'};
const button3={'btn red': '255,0,0'};

document.getElementById("blue").onclick=getValue();
document.getElementById("yellow").onclick=getValue();
document.getElementById("red").onclick=getValue();

function getValue(){
	console.log(Object.values('btn blue'));
	console.log(Object.values('btn yellow'));
	console.log(Object.values('btn red'));
}

function createColor(){
var first=c1/2;
var second=c2/2;
var result=first+second;
return result;
}