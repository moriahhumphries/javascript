// Function constructor
//
// let john = {
//     firstName: "John",
//     birthYear: 1990,
//     job: "teacher"
// };

let Person = function(firstName, birthYear, job) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.job = job;
}

let john = new Person("John", 1990, "teacher");
