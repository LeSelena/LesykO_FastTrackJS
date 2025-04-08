// Task 1 -> FOR
let myArray = [2, 3, 4, 5];
let product = 1;

for (let i = 0; i < myArray.length; i++) {
    product *= myArray[i];
};
alert('The product of the elements of this array: ' + product);

// Task 1 -> WHILE
let k = 0;
let productW = 1;
while (k < myArray.length) {
    productW *= myArray[k];
    k++;
}
alert('The product of the elements of this array: ' + productW);



//Task 2
for (let m = 0; m <= 15; m++) {
    if (m % 2 === 0) {
        console.log(`${m} is even`);
    } else (console.log(`${m} is odd`))
}


//Task 3
function randArray(l) {
    let randomArray = [];
    for (let a = 0; a < l; a++) {
        let randomNumRange = Math.floor(Math.random() * 500) + 1; //Set the range from [1; 500], integers only
        randomArray.push(randomNumRange);
    }
    return randomArray;
}

let number = 7;
console.log(randArray(number));


//Task 4
function raiseToDegree(b, c) {
    let output = b ** c;
    return output;
}

let b = Number(prompt('Please enter the base number', 'number'));
let c = Number(prompt('Please enter power value', 'power'));
if (!isNaN(b) && Number.isInteger(b) && !isNaN(c) && Number.isInteger(c)) {
    let result = raiseToDegree(b, c);
    alert(`raiseToDegree(${b}, ${c}) with the result of exponentiation: ${result}`);
} else {
    alert('Invalid input! Please enter an integer number only.');
};


//Task 5
function findMin() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(findMin(12, 14, 4, -4, 0.2)); // Output: -4


//Task 6
function findUnique(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) { // verifies all the i from array from the first to last if there two are different, hence, the value appears more than once
            return false;
        }
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3])); // -> false
console.log(findUnique([1, 2, 3, 5, 11]));    // -> true


//Task 7
function getLastElement(arrayx, x) {
    if (!Array.isArray(arrayx)) {// if this is not an array
        return 'Invalid data! Input first argument as an array';
    }

    if (x === undefined) {//if no x parameter
        return arrayx[arrayx.length - 1]; // return the last element of an array
    }

    return arrayx.slice(-x); // return last 'x' elements from the array
}

console.log(getLastElement([3, 4, 10, - 5])); // -5
console.log(getLastElement([3, 4, 10, - 5], 2)); // [10, -5]
console.log(getLastElement([3, 4, 10, - 5], 8)); // [3, 4, 10, -5]


// Task 8
function convertApperCase(text) {
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(convertApperCase('i love java script')); // I Love Java Script