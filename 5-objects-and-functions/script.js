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

let personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

let sandra = Object.create(personProto);
sandra.name = "Sandra";
sandra.yearOfBirth = 1990;
sandra.job = "teacher";

let kara = Object.create(personProto, {
    name: { value: "Jane" },
    yearOfBirth: { value: 1986 },
    job: { value: "designer" }
});





