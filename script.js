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
//declaring global variables and will set via functions that calculate BMI
let BMI;
let lbsLeftToLose;

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
	// this.height = function(){(return )}
	this.currentWeight = currentWeight;
	this.BMI = BMI;
	this.goalWeight = goalWeight;
	this.amountLeft = function () {
		return parseInt(this.currentWeight) - parseInt(this.goalWeight);
	};
	this.averageLost = averageLost;
	this.goalDate = goalDate;
}

//converts ft and inches inputs into meters squared
const calculateMeters = (feet, inches) => {
	//convert weight inputs to numbers
	let feetInt = parseInt(feet);
	let inchesInt = parseInt(inches);
	//convert ft to inches
	let convertedInches = feetInt * 12;
	let totalInches = inchesInt + convertedInches;
	let meters = totalInches * 0.0254;
	let metersSquared = (meters = Math.pow(meters, 2));
	return metersSquared;
};

//convers pounds into KG's
const calculateKGsSquared = (weight) => {
	//conver weight to kg's
	let weightInt = parseInt(weight);
	let KGs = weightInt * 0.453592;
	return KGs;
};

//function to calculate BMI
const calculateBMI = (weight, feet, inches) => {
	const h = calculateMeters(feet, inches);
	const m = calculateKGsSquared(weight);
	const BMI = m / h;
};

//function to calculate LB's left to lose
const poundsLeftToLose = (currentWeight, GoalWeight) => {
	lbsLeftToLose = currentWeight - goalWeight;
};

// event listener for when new user form is submited
const newUserForm = document.getElementById("newUser__form");
newUserForm.addEventListener("submit", (e) => {
	e.preventDefault();
	BMI = calculateBMI(currentWeight.value, heightFeet.value, heightInches.value);
	const newUser = new User();
	newUser.name = document.getElementById("newUser__name").value;
	newUser.age = document.getElementById("newUser__age").value;
	newUser.weight = document.getElementById("newUser__currentWeight").value;
	newUser.goalWeight = document.getElementById("newUser__goalWeight").value;
	newUser.amountLeft = parseInt(newUser.weight - newUser.goalWeight);
	document.getElementById("table__name-rec").innerHTML = newUser.name;
	document.getElementById("table__age-rec").innerHTML = newUser.age;
	document.getElementById("table__current-rec").innerHTML = newUser.weight;
	document.getElementById("table__goal-rec").innerHTML = newUser.goalWeight;
	document.getElementById("table__amountLeft-rec").innerHTML =
		newUser.amountLeft;
	document.getElementById("table__BMI-rec").innerHTML = newUser.BMI;
});
