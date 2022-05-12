var c1=(0,0,0);
var c2=(0,0,0);
var cflag=0|1;

const button1={'btn blue': '0,0,255'};
const button2={'btn yellow': '255,255,0'};
const button3={'btn red': '255,0,0'};
function getValueBlue(){
	console.log(Object.values(button1));
}

function getValueYellow(){
	console.log(Object.values(button2));
}

function getValueRed(){
	console.log(Object.values(button3));
}

function createColor(){
var first=c1/2;
var second=c2/2;
var result=first+second;
return result;
}