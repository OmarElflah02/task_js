// task1
// console.log("shahd");
// console.log("js batch");
// console.log("I am learning JavaScript");
// console.log(25 + 15);

//task2
// const name = "Ahmed";
// name = "omar";
// let age = 25;
// const country = "egypt";

// console.log(name);
// console.log(age);
// console.log(country);

//task3
// const age = 20;
// age=21
// console.log(age);

//task5
// console.log(typeof "ahmed");
// console.log(typeof 25);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

//task6
// let price = 100;
// let quantity = 3;
// let total = price * quantity
// console.log(total);

//task7
// let firstName= "Ahmed"
// let lastName= "Ali"

// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);

//task8
// let name = prompt("Enter your name")
// let age = prompt("Enter your age")

// console.log(`hello ${name},you are ${age} years old`);

//task9
// let age = prompt("enter your age");
// const currentYear = 2026
// let birthYear = currentYear - age

// console.log(`you were born around ${birthYear}`);

//task10

// let fnum = +prompt("enter the fnum");
// let snum = +prompt("enter the snum");

// console.log("addtion:", fnum + snum);
// console.log("sub:", fnum - snum);
// console.log("mul:", fnum * snum);
// console.log("div:", fnum / snum);

//task12
// let age = +prompt("enter your age:");
// if (age >= 18) {
// 	console.log("Adult");
// } else {
// 	console.log("minor");
// }

//task13
// let num = +prompt("enter a num");
// if (num > 0) {
// 	console.log("positive");
// } else if (num < 0) {
// 	console.log("Negative");
// } else {
// 	console.log("zero");
// }

//task14
// let score = +prompt("enter your score:")
// if(score >=90){
//     console.log("A");

// }else if (score>= 80){
//     console.log();

// }else{
//     console.log("f");

// }

// task15

//task16
// let price = +prompt("enter your price:");
// let discount = 0;

// if (price >= 1000) {
// 	discount = price * 0.1;
// }
// let totalprice = price - discount
// console.log(price);
// console.log(discount);
// console.log(totalprice);

//task19
// let name = prompt("enter your name")
// let age = prompt("enter your age")
// let city = prompt("enter your city")

// console.log(`My Name is ${name}, Iam ${age},and I live in ${city}`);

// task20
// let username = prompt("enter a userName");
// console.log("userName:", username);
// console.log("Length:", username.length);

// if (username.length < 5) {
// 	console.log("username is too short");
// } else {
// 	console.log("username accepted");
// }

//task21
// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// for (let i = 2; i <= 20; i+=2) {
// 	console.log(i);
// }

// task22
// let num = Number(prompt("enter a num:"));
// for (let i = 1; i <= 10; i++) {
// 	console.log(`${num} * ${i} = ${num * i}`);
// 	console.log();
// }

// task24
// let day = +prompt("enter a number from 1 to 7 :");
// switch (day) {
// 	case 1:
// 		console.log("monday");
// 		break;
// 	case 2:
// 		console.log("tuesday");
// 		break;

// 	default:
// 		console.log("invaild day number");
// }

// task25
let fnum = +prompt("enter the first number");
let snum = +prompt("enter the second number");
let opertor = prompt("enter an opertor (+, -, *, /):");

switch (opertor) {
	default:
		console.log("Invaild opertor");
		break;
	case "+":
		console.log(fnum + snum);
		break;
	case "-":
		console.log(fnum - snum);
		break;
	case "*":
		console.log(fnum * snum);
		break;
	case "/":
		if (snum === 0) {
			console.log("cannot divide by zero");
		} else {
			console.log(fnum / snum);
		}
		break;
}

// task26
let choice = +prompt("choose an option (1-3):");

switch (choice) {
	case 1:
		console.log("profile");
		break;
	case 2:
		console.log("settings");
		break;
	case 3:
		console.log("help");
		break;
	default:
		console.log("Invaild choice");
}
