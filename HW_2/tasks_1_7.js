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
!isNaN(isAdult) -> !=NOT Check if isAdult is a valid number (not NaN).
if (!isNaN(isAdult)) {
    if (isAdult >= 18) {
        alert('You have reached the age of majority');
    } else {
        alert('You are still too young');
    }
} else {
    alert(`The input ${isAdult} is not valid! Please enter a valid age number`);
};


// Task 6
let triangleA = Number(prompt('Please enter the A-side length of the triangle in cm', 'A-side, cm'));
let triangleB = Number(prompt('Please enter the B-side length of the triangle in cm', 'B-side, cm'));
let triangleC = Number(prompt('Please enter the C-side length of the triangle in cm', 'C-side, cm'));

// First check if entered by the User numbers are positive numbers for all three sides at the same moment ||=OR
if (isNaN(triangleA) || isNaN(triangleB) || isNaN(triangleC) || triangleA <= 0 || triangleB <= 0 || triangleC <= 0) {
    console.log('Incorrect data');
} else if ( // The set of conditiouns for the triangle sides to form real triangle
    triangleA + triangleB > triangleC &&
    triangleA + triangleC > triangleB &&
    triangleB + triangleC > triangleA
) {
    // Calculate semi-perimeter of the triangle
    let sp = (triangleA + triangleB + triangleC) / 2;
    // Calculate the area of the triangle based on semi-perimeter
    let area = Math.sqrt(sp * (sp - triangleA) * (sp - triangleB) * (sp - triangleC));
    // Create a separate array from sides numbers & order A-Z to consider that the longest/last in array/hypotenuse=c will be always on the last place
    let sidesArray = [triangleA, triangleB, triangleC].sort((a, b) => a - b);
    // Set the Pythagorean theorem a 2 + b 2 = C 2
    let isRectangular = Math.pow(sidesArray[0], 2) + Math.pow(sidesArray[1], 2) === Math.pow(sidesArray[2], 2);

    console.log(`The area of the triangle is: ${area.toFixed(3)} cm²`);

    console.log(`Is the triangle rectangular? ${isRectangular ? 'Yes' : 'No'}`);

} else {
    console.log('Incorrect data');
};
