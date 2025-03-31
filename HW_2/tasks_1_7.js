// Task 1
let x = 1;
let y = 2;

let res1 = String(x) + String(y); // Add the code, it is necessary to use the variables x and y
console.log(res1); // "12"
console.log( typeof res1); // "string"

let res2 = Boolean(x) + String(y);// Add code is required use variables x and y
console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = Boolean(x<y);// Add code is required use variables x and y
console.log(res3); // true
console.log( typeof res3); // " boolean "

let res4 = (x-x) / (y-y);// Add code is required use variables x and y
console.log(res4); // NaN
console.log( typeof res4); // "number"



// Task 2
let inputNumber = Number(prompt('Please enter a number only', 'Enter your number here'));  // Is convertion needed?
if (!isNaN(inputNumber)) {
    let m = 3;
    let evenAndPositive = inputNumber % m === 0 && inputNumber > 0;
    let isMultipleOfSeven = inputNumber % 7 === 0;

    console.log(`The input number: ${inputNumber}`);
    console.log(`The number when even m=3 is positive: ${evenAndPositive} and is a multiple of 7: ${isMultipleOfSeven}`);
} else {
    console.log(`The input ${inputNumber} is not valid! Please enter a vali number`);
};


//Task 3