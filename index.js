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
	color1 = colorStringToRGB(color1);
	console.log("Got values: "+color1);
	color2 = colorStringToRGB(color2);
	console.log("Got values: "+color2);
	resetColors();
	console.log(color1+": "+color2+": ");
	return 0;
}

function colorStringToRGB(color){
	if (color == "blue"){
		blue = [0,0,255];
	}
	else if (color == "yellow"){
		yellow = [255,255,0];
	}
	else if (color == "red"){
		red = [255,0,0];
	}
	//console.log(color1,color2);
	return 0;
}

function createColor(color1,color2){
	if (color1 == "blue" && color2 == "yellow"){
		return green;
	}
}