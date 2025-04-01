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
let inputNumber = Number(prompt('Please enter a number only', 'Enter your number here'));
if (!isNaN(inputNumber)) {
    let m = 3;
    let evenAndPositive = inputNumber % m === 0 && inputNumber > 0;
    let isMultipleOfSeven = inputNumber % 7 === 0;

    console.log(`The input number: ${inputNumber}`);
    console.log(`The number when even m=3 is positive: ${evenAndPositive} and is a multiple of 7: ${isMultipleOfSeven}`);
} else {
    console.log(`The input ${inputNumber} is not valid! Please enter a vali number`);
};


// Task 3
const myArray = [];
myArray[0] = 77;
myArray[1] = 'My string in the array';
myArray[2] = true;
myArray[3] = null;
alert(`Array length: ${myArray.length}`);
myArray[4] = prompt('Please enter any value', 'Any value');
alert(`Fifth element: ${myArray[4]}`);
// 8) Delete the 1st element of the array and display the array
myArray.shift();
alert(`Final Array: ${myArray}`);


// Task 4
const citiesList = [' Rome ', ' Lviv ', ' Warsaw '];
const citiesUpdated = citiesList.join('*');
console.log(citiesUpdated);


// Task 5
let isAdult = Number(prompt('Please enter your age', 'Enter your age here'));
if (!isNaN(isAdult)) {
    if (isAdult >= 18) {
        alert('You have reached the age of majority');
    } else {
        alert('You are still too young');
    }
} else {
    alert(`The input ${isAdult} is not valid! Please enter a valid age number`);
};