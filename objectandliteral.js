var stem2 = {
	classnumber:"F103",
  students:18
};

var userInput = prompt("Classnumber or Students?")
//asked user for input
var lowercase = userInput.toLowerCase();
//this makes the user's input to all lowercase, to make it work with the variables
if ((lowercase === "classnumber") || (lowercase === "students")) {
window.alert(stem2[lowercase]);
}
else {
askAgain ();
}
function askAgain() {
var stem2 = {
	classnumber:"F103",
  students:18
};

var userInput = prompt("Classnumber or Students?")
//asked user for input
var lowercase = userInput.toLowerCase();
//this makes the user's input to all lowercase, to make it work with the variables
if ((lowercase === "classnumber") || (lowercase === "students")) {
window.alert(stem2[lowercase]);
}
else {
askAgain ();
}
}
