var color1 = "";
var color2 = "";

function checkColor(color){
	if (color1 && color2){
		combine_color();
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
	console.log("Got colors: "+color1+", "+color2);
	colorStringToRGB();
	console.log(color1+": "+color2+": ");
	resetColors();
	console.log(color1+": "+color2+": ");
	return 0;
}

function colorStringToRGB(color,sColor){
	if (color == blue){
		blue = "0,0,255";
	}
	else if (color2 == blue){
		sColor = "0,0,255";
	}
	else if (color1 == yellow){
		color = "255,255,0";
	}
	else if (color2 == yellow){
		sColor = "255,255,0";
	}
	else if (color1 == red){
		color = "255,0,0";
	}
	else if (color2 == red){
		sColor = "255,0,0";
	}
	console.log(color,sColor);
	return 0;
}

function createColor(color1,color2){
	if (color1 == "blue" && color2 == "yellow"){
		return green;
	}
}