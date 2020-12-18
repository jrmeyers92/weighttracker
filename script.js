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

// event listener for when new user form is submited
const newUserForm = document.getElementById("newUser__form");
newUserForm.addEventListener("submit", () => {
	const name = document.getElementById("newUser__name");
	const age = document.getElementById("newUser__age");
	const height = document.getElementById("newUser__age");
	const weight = document.getElementById("newUser__age");
	const goalWeight = document.getElementById("newUser__age");
});
