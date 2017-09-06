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
	for (i = 1; i < 3; i++) {
//made a for loop, made it add one if the user puts wrong input
		var userInput = prompt("Classnumber or Students? You have tried " + i + " time(s)");
    //added the i times to tell user how many times he/she tried
		var lowercase = userInput.toLowerCase();
		if ((lowercase === "classnumber") || (lowercase === "students")) {
			i = 3;
      //made i=3 to make 3 the limit
				window.alert(stem2[lowercase]);
		}
	}
}

