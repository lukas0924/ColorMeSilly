var c1={r:0, g:0, b:0};
var c2={r:0, g:0, b:0};
var cflag= [];

const button1={r:0, g:0, b:245};
const button2={r:255, g:255, b:0};
const button3={r:255, g:0, b:0};

function getValueBlue(){
	console.log(Object.values(button1));
	if(cflag != 1){
		c1=button1;
		cflag == 1;
	}
	else if(cflag == 1){
		c2=button1;
	}
	console.log(Object.values(c2),"this is c2");
	console.log(Object.values(c1),"this is c1");
	createColor();
}
	
function getValueYellow(){
	console.log(Object.values(button2));
	if(cflag != 1){
		c1=button2;
		cflag == 1;
	}
	else if(cflag == 1){
		c2=button2;
	}
	console.log(Object.values(c2),"this is c2");
	console.log(Object.values(c1),"this is c1");
	createColor();
}

function getValueRed(){
	console.log(Object.values(button3));
	if(cflag != 1){
		c1=button3;
		cflag == 1;
	}
	else if(cflag == 1){
		c2=button3;
	}
	console.log(Object.values(c2),"this is c2");
	console.log(Object.values(c1),"this is c1");
	createColor();
}

function createColor(){
var first=c1%2;
var second=c2%2;
var result=first+second;
console.log(Object.values(c2),"this is c2");
console.log(Object.values(c1),"this is c1");
console.log("i am here");
return result;}