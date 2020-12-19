// create an array to hold all user objects
const users = [];
//variables for create user form
const name = document.getElementById("newUser__name");
const age = document.getElementById("newUser__age");
const heightFeet = document.getElementById("form__feet");
const heightInches = document.getElementById("form__inches");
const currentWeight = document.getElementById("newUser__currentWeight");
const goalWeight = document.getElementById("newUser__goalWeight");
// getting lenght off users array in order to uniqly name new users
let arrayLength = users.length;

let BMI;

// function constructor to create new user instances

function User(
	name,
	age,
	height,
	currentWeight,
	BMI,
	goalWeight,
	amountLeft,
	averageLost,
	goalDate
) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.currentWeight = currentWeight;
	this.BMI = BMI;
	this.goalWeight = goalWeight;
	this.amountLeft = amountLeft;
	this.averageLost = averageLost;
	this.goalDate = goalDate;
}

const calculateMeters = (feet, inches) => {
	//convert weight inputs to numbers
	let feetInt = parseInt(feet);
	let inchesInt = parseInt(inches);
	//convert ft to inches
	let convertedInches = feetInt * 12;
	let totalInches = inchesInt + convertedInches;
	let meters = totalInches * 0.0254;
	return meters;
};

const calculateKGsSquared = (weight) => {
	//conver weight to kg's
	let KGs = weight * 0.453592;
	KGsInt = parseInt(KGs);
	kGsSquared = Math.pow(KGsInt, 2);
	return kGsSquared;
};

//function to calculate BMI
const calculateBMI = (weight, feet, inches) => {
	BMI = calculateMeters(feet, inches) / calculateKGsSquared(weight);
	console.log(BMI);
};

// event listener for when new user form is submited
const newUserForm = document.getElementById("newUser__form");
newUserForm.addEventListener("submit", (e) => {
	e.preventDefault();
	calculateBMI(currentWeight.value, heightFeet.value, heightInches.value);
});
