var c1=(0,0,0);
var c2=(0,0,0);
var cflag=0|1;

const button1={'btn blue': '0,0,255'};
const button2={'btn yellow': '255,255,0'};
const button3={'btn red': '255,0,0'};

function getValueBlue(){
	console.log(Object.values(button1));
	if(cflag == 0){
		c1=button1;
		cflag=1;
	}
	else {
		c2=button1;
	}
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
	createColor();
}

function createColor(){
var first=c1/2;
var second=c2/2;
var result=first+second;
return result;
}