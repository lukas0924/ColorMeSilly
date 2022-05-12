var c1=(0,0,0);
var c2=(0,0,0);
var cflag=0|1;

const button1={button1: '0,0,255'};
const button2={button2: '255,0,0'};
const button3={button3: '255,255,0'};

document.getElementById("blue").onclick=getValue();
document.getElementById("red").onclick=getValue();
document.getElementById("yellow").onclick=getValue();

function getValue(){
	console.log(Object.values(button1));
	console.log(Object.values(button2));
	console.log(Object.values(button3));
}

function createColor(){
var first=c1/2;
var second=c2/2;
var result=first + second;
return result;
}