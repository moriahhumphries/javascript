// Function constructor and prototype property


// let kate = {
//     firstName: "Kate",
//     birthYear: 1990,
//     job: "teacher"
// };

// let Person = function(firstName, birthYear, job) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.job = job;
// }
//
// // Will be inherited for all instances of Person
// Person.prototype.calculateAge = function() {
//     console.log(2020 - this.birthYear);
// }
//
// Person.prototype.lastName = "Smith";
//
// let kate = new Person("Kate", 1990, "teacher");
// let jane = new Person("Jane", 1968, "designer");
// let mark = new Person("Mark", 1948, "retired");
//
// kate.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
//
// console.log(kate.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);
//
// // Prototype and the console
//
// console.log(kate);

// Object.create method

// let personProto = {
//     calculateAge: function () {
//         console.log(2020 - this.yearOfBirth);
//     }
// };
//
// let sandra = Object.create(personProto);
// sandra.name = "Sandra";
// sandra.yearOfBirth = 1990;
// sandra.job = "teacher";
//
// let kara = Object.create(personProto, {
//     name: { value: "Jane" },
//     yearOfBirth: { value: 1986 },
//     job: { value: "designer" }
// });

// Primitives vs objects

// Primitives
// let a = 23;
// let b = a;
// a = 46;
//
// console.log(a);
// console.log(b);
//
// let obj1 = {
//     name: "John",
//     age: 26
// };
//
// // points to obj1
// let obj2 = obj1;
// obj1.age = 30;
//
// console.log(obj1.age);
// console.log(obj2.age);
//
// // Functions
//
// let age = 32;
// let obj = {
//     name: "Moriah",
//     city: "Dallas"
// };
//
// function change(a, b){
//     a = 30; // primitive
//     b.city = "San Francisco"; // Changes city, object passed
// }
//
// change(age, obj);
//
// console.log(age);
// console.log(obj.city);

// Passing Functions as Arguments

// let years = [1998, 1988, 2005, 1984, 1972];
//
// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for(let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i])); // inserts element at end of array
//     }
//     return arrRes;
// }
//
// // Callback functions, functions passed into functions
//
// function calculateAge(ele) {
//     return 2020 - ele;
// }
//
// function fullAge(ele) {
//     return ele >= 18;
// }
//
// function maxHeartRate(ele) {
//     if(ele >= 18 && ele <= 81) {
//         return Math.round(206.9 - (0.67 * ele));
//     }
//     return -1;
// }
//
// let ages = arrayCalc(years, calculateAge); // not calling function, passing in
// let fullAges = arrayCalc(ages, fullAge); // uses array, passes in function
// let rates = arrayCalc(ages, maxHeartRate);
//
// console.log(ages);
// console.log(fullAges);
// console.log(rates);


// Functions returning functions

// function interviewQuestion(job){
//     if(job === "designer"){
//         return function (name) { // anonymous function
//             console.log(name + ", can you explain what UX design is?")
//         }
//     } else if (job === "teacher") {
//         return function (name) {
//             console.log("What subject do you teach, " + name + "?")
//         }
//     } else {
//         return function (name) {
//             console.log("Hello, " + name + " what do you do?")
//         }
//     }
// }
//
// // functions are objects
// let teacherQuestion = interviewQuestion("teacher"); // "teacher" anon function
// let designerQuestion = interviewQuestion("designer"); // "designer anon function
//
// teacherQuestion("John");
// designerQuestion("John");
// teacherQuestion("Jane");
// designerQuestion("Sandra");
//
// interviewQuestion("teacher")("Mark"); // evaluates from left to right

// IIFE

// function game() {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function (){
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// })();
//
// // console.log(scores);
//
// (function (goodLuck){
//     let score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// Closures - inner function has access to variables and functions of outer functions. Even after a function returns, the variable object is still accessible.

// function retirement(retirementAge) {
//     let a = " years left until retirement.";
//     return function (yearOfBirth) {
//         let age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }
//
// let retirementUS = retirement(66);
// retirementUS(1990);
// let retirementGermany = retirement(65);
// retirementGermany(1990);
// let retirementIceland = retirement(67);
// retirementIceland(1990);

// retirement(66)(1990);

// function interviewQuestion(job){
//     if(job === "designer"){
//         return function (name) { // anonymous function
//             console.log(name + ", can you explain what UX design is?")
//         }
//     } else if (job === "teacher") {
//         return function (name) {
//             console.log("What subject do you teach, " + name + "?")
//         }
//     } else {
//         return function (name) {
//             console.log("Hello, " + name + " what do you do?")
//         }
//     }
// }


// function interviewQuestion(job) {
//     return function (name) {
//         if (job === "designer") {
//             console.log(name + ", can you explain what UX design is?")
//         } else if (job === "teacher") {
//             console.log("What subject do you teach, " + name + "?")
//         } else {
//             console.log("Hello, " + name + " what do you do?")
//         }
//     }
// }
//
// interviewQuestion("teacher")("John");

// Bind, Call, Apply methods

let john = {
    name: "John",
    age: 26,
    job: "teacher",
    presentation: function (style, timeOfDay) {
        if (style === "formal") {
            console.log("Good " + timeOfDay + ", ladies and gentleman. I'm " + this.name + " and I am a " + this.job + " and I am " + this.age + " years old.");
        } else if (style === "friendly") {
            console.log("Hey, what's up? I'm " + this.name + ", have a cool " + timeOfDay + ".")

        }
    }
}

let emily = {
    name: "Emily",
    age: 35,
    job: "designer"
};

john.presentation("formal", "morning");

// Call method
john.presentation.call(emily, "friendly", "afternoon");

// Apply
// john.presentation.apply(emily ["friendly", "evening"]);

// Bind - returns a function

let johnFriendly = john.presentation.bind(john, "friendly"); // presets the argument

johnFriendly("morning");

let emilyFormal = john.presentation.bind(emily, "formal")

emilyFormal("evening");

let years = [1998, 1988, 2005, 1984, 1972];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i])); // inserts element at end of array
    }
    return arrRes;
}

// Callback functions, functions passed into functions

function calculateAge(ele) {
    return 2020 - ele;
}

function fullAge(limit, ele) {
    return ele >= limit;
}

let ages = arrayCalc(years, calculateAge);

let fullJapan = arrayCalc(ages, fullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan)



