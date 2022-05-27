// this file contains the javascript code that gives the
// buttons functionality for the color combination game mode 
var color1 = "";
var color2 = "";

// this function checks that the colors revieve their name when clicked. 
// then combine color is called to complete the action.
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

// this function sets the colors back to empty 
// strings at then end of the function so more colors can be chosen 
function resetColors(){
	color1 = "";
	color2 = "";
	console.log("Colors have reset: "+color1+color2);
	return 0;
}

// this funciton takes both colors clicked and combines after creating the rgb values
function combineColor(){
	console.log("Got colors: "+color1+" and "+color2);
	color1 = colorStringToRGB(color1);
	color2 = colorStringToRGB(color2);
	console.log("Got values: "+color1+" and "+color2);
	createColor(color1,color2);
	resetColors();
	return 0;
}

// this function creates the rgb values for each color when they are chosen
function colorStringToRGB(color){
	if (color == "blue"){
		blue = [0,0,255];
		return blue;
	}
	else if (color == "green"){
		green = [0,255,0];
		return green;
	}
	else if (color == "red"){
		red = [255,0,0];
		return red;
	}
	else if(color == "yellow"){
		yellow = [255,255,0];
		return yellow;
	}
	else if(color == "orange"){
		orange = [255,165,0];
		return orange;
	}
	else if(color == "magenta"){
		magenta = [255,0,255];
		return magenta;
	}
	else if(color == "cyan"){
		cyan = [0,255,255];
		return cyan;
	}
	console.log(color1,color2);
	
}

// this funciton creates the color made by the two colors chosen 
// by dividing each rgb value by two before adding them together to create the color.
// the combination of red and green is a special case because the 
// color returned is not the correct shade of yellow.
function createColor(color1,color2){
	console.log(color1,color2);
	let r1=color1[0];
	let g1=color1[1];
	let b1=color1[2];
	let r2=color2[0];
	let g2=color2[1];
	let b2=color2[2];
	let r3=Math.floor((r1+r2)/2);
	let g3=Math.floor((g1+g2)/2);
	let b3=Math.floor((b1+b2)/2);
	let newColor = [r3,g3,b3];

	if(color1 == red && color2 == green){
		r3 = 255;
		g3 = 255;
		b3 = 0;
	}
	else if(color1 == green && color2 == red){
		r3 = 255;
		g3 = 255;
		b3 = 0;
	}

	console.log("Your new color is: " + newColor);
	colors = "rgb("+r3+","+g3+","+b3+")";
	document.getElementById('scorebox').style.backgroundColor=colors;
}
