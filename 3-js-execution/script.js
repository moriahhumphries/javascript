// Hoisting - Only works for function declarations

// calcAge(1988);
//
// function calcAge(year){
//     console.log(2020 - year)
// }

// Won't work
// retirement(1954);

// let retirement = function(year) {
//     console.log(65 - (2020 - year));
// }

// Cannot access before initialization, undefined
// console.log(age);
// let age = 32;
//
// function foo() {
//     let age = 65;
//     console.log(age)
// }
//
// foo(); // Uses variable from function
// console.log(age); // Uses global variable

// This keyword
//
// calcAge(2020);
//
// function calcAge(year) {
//     console.log(2020 - year);
//     console.log(this);
// }

let john = {
    firstName: "John",
    birthYear: 1990,
    calcAge: function () {
        console.log(this);
        console.log(2020 - this.birthYear);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.calcAge();

// Method borrowing

let mike = {
    firstName: "Mike",
    birthYear: 1984
};

mike.calcAge = john.calcAge();
// mike.calcAge();



