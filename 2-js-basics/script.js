// Variables and Data Types
// console.log("Hello World from external js!");

// let firstName = "Moriah";
// console.log(firstName);
//
// let age = 32;
// let fullAge = true;

// Variables and Type Coercion

// let firstName = "Moriah";
// let age = 32;
// let fullAge = true;
//
// console.log(firstName + " is " + age + "!");
//
// console.log(typeof firstName + " " + typeof age);
//
// alert(firstName + " is " + age + "!");
//
// let userAge = prompt("What is your age?");
// console.log("Users age = " + userAge);

//Operators

// let currentYear = 2020;
// let moriahAge = 32;
// let andrewAge = 35;
// let yearMoriah = currentYear - moriahAge;
// console.log("Moriah was born in: " + yearMoriah);
//
// console.log(currentYear + 2);
// console.log(currentYear - 2);
// console.log(currentYear / 2);
// console.log(currentYear * 2);
//
// let andrewOlder = moriahAge < andrewAge;
// console.log("Is Andrew older than Moriah? " + andrewOlder);
//
// console.log(typeof currentYear);
// console.log(typeof moriahAge);
// console.log(typeof andrewAge);
// console.log(typeof andrewOlder);

//Operator Precedence

// let now = 2020;
// let yearMoriah = 1988;
// let fullAge = 18;
//
// var isFullAge = (now - yearMoriah) >= fullAge;
//
// console.log(isFullAge)
//
// let ageAndrew = 35;
// let ageMoriah = 32;
// let averageAge = (ageAndrew + ageMoriah) / 2;
//
// console.log(averageAge);

// Coding challenge BMI

// let markMass = 78 //84;
// let johnMass = 92 //88;
//
// let markHeight = 1.69 //1.82;
// let johnHeight = 1.95 //1.88;
//
// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);
//
// let higherBMI = markBMI >= johnBMI;
// console.log("Mark's BMI is: " + markBMI + ", and John's BMI is " + johnBMI +". Is Mark's BMI higher than John's? " + higherBMI);

// If/else statements

// let firstName = "Moriah";
// let maritalStatus = "Married";
//
// if (maritalStatus === "married") {
//     console.log(firstName + " is married!");
// } else {
//     console.log(firstName + " is single!");
// }
//
// let isMarried = true;
//
// if (isMarried) {
//     console.log(firstName + " is married!");
// } else {
//     console.log(firstName + " is single!");
// }
//
// let markMass = 78 //84;
// let johnMass = 92 //88;
//
// let markHeight = 1.69 //1.82;
// let johnHeight = 1.95 //1.88;
//
// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);
//
// if (markBMI > johnBMI) {
//     console.log("Mark's BMI is higher than John's!");
// } else {
//     console.log("John's BMI is higher than John's!");
// }


// Boolean Logic

// let firstName = "Kerrigan";
// let age = 9;
//
// if (age < 3) {
//     console.log(firstName + " is a tiny baby!");
// } else if (age >= 4 && age<=8) {
//     console.log(firstName + " is an adult cat!");
// } else {
//     console.log(firstName + " is a Senior Baby!");
//
// }

// Ternary and Switch Statements

// let firstName = "Iggy";
// let age = 16;
//
// age >= 18 ? console.log(firstName + " is " + age + " and drinks beer.") : console.log(firstName + " is " + age + " and drinks juice.")

// let job = "Cat";
//
// switch (job) {
//     case "Developer":
//         console.log(firstName + " makes software");
//         break;
//     case "Cat":
//         console.log(firstName + " stays at home and is a Cat");
//         break;
//     case "Dog":
//         console.log(firstName + " would never be a Dog!");
//         break;
//     default:
//         console.log(firstName + " does something else");
// }
//
// let iggyAge = 4;
// switch (true) {
//     case iggyAge < 3:
//         console.log(firstName + " is a tiny baby!");
//         break;
//     case iggyAge >= 4 && iggyAge<=8:
//         console.log(firstName + " is an adult cat!")
//         break;
//     default:
//         console.log(firstName + " is a Senior Baby!");
// }

//Coding Challenge 2

// let johnsTeamAverage = (180 + 120 + 103) / 3;
// let mikesTeamAverage = (216 + 94 + 123) / 3;
// let marysTeamAverage = (150 + 134 + 105) / 3;
//
// console.log("John's team average: " + johnsTeamAverage);
// console.log("Mike's team average: " + mikesTeamAverage);
// console.log("Mary's team average: " + marysTeamAverage);
//
// if (mikesTeamAverage === johnsTeamAverage && johnsTeamAverage === marysTeamAverage) {
//     console.log("There was a tie!")
// } else if (mikesTeamAverage > johnsTeamAverage && marysTeamAverage < mikesTeamAverage) {
//     console.log("Mike won! Mike's team average is " + mikesTeamAverage + ", and John's team average is " + johnsTeamAverage + ", and Mary's score is " + marysTeamAverage);
// } else if (johnsTeamAverage > mikesTeamAverage && johnsTeamAverage > marysTeamAverage) {
//     console.log("John won! John's team average is " + johnsTeamAverage + ", and Mike's team average is " + mikesTeamAverage + ", and Mary's score is " + marysTeamAverage);
// } else {
//     console.log("Mary won! Mary's team average is " + marysTeamAverage + ", and John's team average is " + johnsTeamAverage + ", and Mike's team average is " + mikesTeamAverage);
// }

// function calculateAge(currentYear, birthYear) {
//     return currentYear - birthYear;
// }
//
// let age = calculateAge(2020, 1988);
// console.log(age);

function birthCalc(birthYear) {
    return 2020 - birthYear;
}

let ageMoriah = birthCalc(1988);
let ageAndrew = birthCalc(1984);

function yearsUntilRetirement(birthYear) {
    let age = birthCalc(birthYear);
    let retirement = 63 - age;
    console.log("Moriah retires in " + retirement + " years.")
}

yearsUntilRetirement(1984);









