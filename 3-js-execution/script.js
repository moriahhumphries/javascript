// Hoisting - Only works for function declarations

calcAge(1988);

function calcAge(year){
    console.log(2020 - year)
}

// Won't work
// retirement(1954);

let retirement = function(year) {
    console.log(65 - (2020 - year));
}

// Cannot access before initialization, undefined
// console.log(age);
let age = 32;

function foo() {
    let age = 65;
    console.log(age)
}

foo(); // Uses variable from function
console.log(age); // Uses global variable


