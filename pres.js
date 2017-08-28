var pres = {
	fName:"Bernie",
  lName:"Sanders",
  age:75,
};

window.alert(pres.fName);

/* August 28. Replacing values in an Object Literal */

var x = prompt("Enter firstName, lastName, age, or grade")
/* I am taking a users prompt */

var students = {
firstName:"Michael",
lastName:"Mitamura",
age:"16",
grade:"11",
}

window.alert(students[x]);
/* Creating a window alert that shows what the user asked for. But if the user did not enter an explicit command, this will not work. */

/* AUgust 28, Replacing a new name */
var newName = prompt("What is his new first name?")

var Michael = {
firstName:"Michael",
lastName:"Mitamura",
age:"16",
grade:"11",
}

window.alert(Michael.firstName);
window.alert(Michael.firstName = newName);

/* Creating another window alert to see if this code is accurate, meaning we know we replaced Michael with a new name */



