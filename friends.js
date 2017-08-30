var Michael = {
	firstName:"Michael",
	age:16,
	grade:11,
  friends: ["Raene", "Shayna", "Imari"]
};

var Raene = {
	firstName:"Raene",
	age:15,
	grade:11,
  friends: ["Michael", "Alexus", "Lauren"]
};

var Shayna = {
	firstName:"Shayna",
	age:15,
	grade:11,
  friends: ["Ashli", "Kelsey", "Lexi"]
};

var x = [Michael,Raene,Shayna];
window.alert(x[1].friends[0]);
