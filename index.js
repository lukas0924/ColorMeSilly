var c1=(0,0,0);
var c2=(0,0,0);
var cflag=0|1;

const button1={'btn blue': rgb(0,0,255)};
const button2={'btn yellow': rgb(255,255,0)};
const button3={'btn red': rgb(255,0,0)};

function getValueBlue(){
	console.log(Object.values(button1));
	if(cflag == 0){
		c1=button1;
		cflag=1;
	}
	else {
		c2=button1;
	}
	console.log("about to call createColor");
	createColor();
}
	
function getValueYellow(){
	console.log(Object.values(button2));
	if(cflag == 0){
		c1=button2;
		cflag=1;
	}
	else {
		c2=button2;
	}
	console.log("about to call createColor");
	createColor();
}

function getValueRed(){
	console.log(Object.values(button3));
	if(cflag == 0){
		c1=button3;
		cflag=1;
	}
	else {
		c2=button3;
	}
	console.log("about to call createColor");
	createColor();
}

function createColor(){
var first=c1%2;
var second=c2%2;
var result=first+second;
console.log("i am here");
return result;
}