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

Person.prototype.calculateAge = function() {
    console.log(2020 - this.birthYear);
}

let kate = new Person("Kate", 1990, "teacher");
let jane = new Person("Jane", 1968, "designer");
let mark = new Person("Mark", 1948, "retired");

kate.calculateAge();
jane.calculateAge();
mark.calculateAge();


