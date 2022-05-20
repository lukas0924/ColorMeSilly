var color1 = "";
var color2 = "";

function checkColor(color){
	if (color1 && color2){
		combineColor();
	}
	else if (!color1){
		color1 = color;
	}
	else if (color1 && !color2){
		color2 = color;
		combineColor();
	}
	return 0;
}

function resetColors(){
	color1 = "";
	color2 = "";
	return 0;
}

function combineColor(){
	console.log("Got colors: "+color1+" and "+color2);
	color1 = colorStringToRGB(color1);
	color2 = colorStringToRGB(color2);
	console.log("Got values: "+color1+" and "+color2);
	createColor();
	resetColors();
	console.log("Colors have reset: "+color1+color2);
	return 0;
}

function colorStringToRGB(color){
	if (color == "blue"){
		blue = "0,0,255";
		return blue;
	}
	else if (color == "green"){
		green = "0,255,0";
		return green;
	}
	else if (color == "red"){
		red = "255,0,0";
		return red;
	}
	else if(color == "yellow"){
		yellow = "255,255,0"
		return yellow;
	}
	else if(color == "orange"){
		orange = "255,165,0"
		return orange;
	}
	else if(color == "purple"){
		purple = "128,0,128"
		return purple;
	}
	console.log(color1,color2);
	
}

function createColor(color1,color2,result){
	result = color1 + color2;
	console.log(result);
}