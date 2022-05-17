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
	comsole.log("Get colors: "+color1+", "+color2);
	resetColors();
	return 0;
}