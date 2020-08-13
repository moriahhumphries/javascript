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
let a = 23;
let b = a;
a = 46;

console.log(a);
console.log(b);

let obj1 = {
    name: "John",
    age: 26
};

// points to obj1
let obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions

let age = 32;
let obj = {
    name: "Moriah",
    city: "Dallas"
};

function change(a, b){
    a = 30; // primitive
    b.city = "San Francisco"; // Changes city, object passed
}

change(age, obj);

console.log(age);
console.log(obj.city);






