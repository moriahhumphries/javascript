// Function constructor and prototype property

console.log("test5");

// let kate = {
//     firstName: "Kate",
//     birthYear: 1990,
//     job: "teacher"
// };

let Person = function(firstName, birthYear, job) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.job = job;
}

// Will be inherited for all instances of Person
Person.prototype.calculateAge = function() {
    console.log(2020 - this.birthYear);
}

Person.prototype.lastName = "Smith";

let kate = new Person("Kate", 1990, "teacher");
let jane = new Person("Jane", 1968, "designer");
let mark = new Person("Mark", 1948, "retired");

kate.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(kate.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


