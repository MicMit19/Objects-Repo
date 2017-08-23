function calculateArea(width,height){
//the width and height are undefined
	var area = width*height;
  //this is the "formula" for the area, width times height
  return area;
  //returns the area
}
var width = prompt("What is the width?")
//asks the user what the width is
var height = prompt("What is the height?")
//asks the user what the height is
var wallOne = calculateArea(width,height);
//defined the width and height
window.alert(wallOne);
//pops up wallOne, the area which is width*height, which should be 15
