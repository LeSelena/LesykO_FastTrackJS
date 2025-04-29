// Task 1 -> Create the function for counting properties in some object
function propsCount(currentObject) {
    let count = Object.keys(currentObject).length;
    return count;
};

let mentor = {
    course: 'javascript',
    duration: 'month',
    direction: 'testing'
}

console.log(propsCount(mentor));



// Task 2 -> Create the function that will output properties and values as 2 arrays
function showProps(obj) {
    let arrayKeys = Object.keys(obj);
    let arrayValues = Object.values(obj);
    return {
        keys: arrayKeys,
        values: arrayValues
    };
};

let testObject = {
    course: 'javascript',
    duration: 'month',
    direction: 'testing',
    homework_completed: true,
    number_students: 12
};

let resultObject = showProps(testObject);
console.log(resultObject.keys);
console.log(resultObject.values);


// Task 3 -> Create a Persons class that will be used to create an inherited Students, and Student should be extended and reworked
class Person {
    constructor(name, surname) {
        this.name = name,
        this.surname = surname
    };
    showFullName () {
        return `${this.surname} ${this.name}`;
    };
};

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname); // call parent constructor already exist in Person base class
        this.year = year;     // extending with the year of admission
    }

    // Redefine the method showFullName() so that not only the name, surname, but also the middlename will be displayed 
    showFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }

    // Adding the method to show current course
    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year;
        if (course >= 1 && course <= 6) {
            return course;
        } else {
            return 'Invalid data! Please enter a correct year';
        };
    };
};

const stud1 = new Student('Olena', 'Lesyk', 2021);
console.log(stud1.showFullName('Serhiivna')); // Lesyk Olena Serhiivna
console.log('Current course: ' + stud1.showCourse()); //4


// Task 4 -> Worker class
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName,
        this.dayRate = dayRate,
        this.workingDays = workingDays
    };
    showSalary() {
        const salary = this.dayRate * this.workingDays;
        //console.log(`${this.fullName} Salary: ${salary}`);
        return salary;
    };

    showSalaryWithExperience() {
        const salaryWithExp = this.dayRate * this.workingDays * this.#experience;
        //console.log(`${this.fullName} Salary: ${salaryWithExp}`);
        return salaryWithExp;
    };

    // Getter for experience
    get experience() {
        return this.#experience;
    }

    // Setter for experience
    set experience(value) {
        this.#experience = value;
    }
};

// To use Worker class to create different workers and sort by final salary
let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Thomson", 48, 20);
let worker3 = new Worker("Andy Ander", 29, 23);
let worker4 = new Worker("Olena Lesyk", 30, 22);

console.log(worker1.fullName);
console.log(`${worker1.fullName} salary: ${worker1.showSalary()}`);
console.log("New experience: " + worker1.experience);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);
worker1.experience = 1.3;
console.log("New experience: " + worker1.experience);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);

console.log(worker2.fullName);
console.log(`${worker2.fullName} salary: ${worker2.showSalary()}`);
console.log("New experience: " + worker2.experience);
console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);
worker1.experience = 1.9;
console.log("New experience: " + worker2.experience);
console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);

console.log(worker3.fullName);
console.log(`${worker3.fullName} salary: ${worker3.showSalary()}`);
console.log("New experience: " + worker2.experience);
console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);
worker1.experience = 1.5;
console.log("New experience: " + worker3.experience);
console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);

console.log(worker4.fullName);
console.log(`${worker4.fullName} salary: ${worker4.showSalary()}`);
console.log("New experience: " + worker2.experience);
console.log(`${worker4.fullName} salary: ${worker4.showSalaryWithExperience()}`);
worker1.experience = 1.7;
console.log("New experience: " + worker4.experience);
console.log(`${worker4.fullName} salary: ${worker4.showSalaryWithExperience()}`);

// Creating array of workers
const workers = [worker1, worker2, worker3, worker4];

// Sort by salary with experience
workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

// Print sorted workers
console.log("Sorted salary:");
for (const worker of workers) {
    console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
}