// Task 1 -> Rectangle area calculation with handling possible exceptions
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {  // Verify if number and not NaN
        throw new Error('To calculate area please eneter width and height as numbers!');
    }
    return width * height;
};

// Write code that uses this function and handles possible exceptions
try {
    let a = +prompt('Rectangle width:', 'Enter here');
    let b = +prompt('Rectangle height:', 'Enter here');
    let area = calcRectangleArea(a, b);
    console.log('Rectangle area: ' + area);
} catch (error) {
    console.log('Error: ' + error.message);
}


//Task 2 -> Function for verification of the age
function checkAge() {
    try {

        let setAge = prompt('Please enter your age:', 'Age here');

        if (setAge === '' || setAge === null) {
            throw new Error('The field is empty! Please enter your age');
        } else if (isNaN(setAge)) {
            throw new Error('Entered value is not a number');
        } else if (Number(setAge) < 14) {
            throw new Error('Age is less than 14 years');
        } else {
            alert('You are able to watch the movie');
        }

    } catch (error) {
        alert(`Error Name: ${error.name}\nError Message: ${error.message}`);
    }
};

checkAge();


// Task 3 -> Month exception class with function which returns month name and covers exceptions
class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
};

function showMonthName(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month < 1 || month > 12 || isNaN(month) || month === '' || month === null || !Number.isInteger(month)) {
        throw new MonthException('Incorrect month number');
    }
    return months[month - 1]
}

try {
    //console.log(showMonthName('fsdwq')); // MonthException Incorrect month number
    //console.log(showMonthName(23)); // MonthException Incorrect month number
    //console.log(showMonthName(5)); // May
    //console.log(showMonthName(1.45)); // MonthException Incorrect month number
    console.log(showMonthName(14)); // MonthException Incorrect month number
} catch (error) {
    console.log(error.name + ' ' + error.message);
};


// Task 4 -> Show the Users id function, verification of the several ids
function showUser (id) {
    if (id < 0) {
        throw new Error('ID must not be negative: ' + id)
    }
    return {id: id};
}

function showUsers(ids) {
    const result = [];

    for (let i = 0; i < ids.length; i++) {
        try {
            const user = showUser(ids[i]);
            result.push(user);
        } catch (error) {
            console.log('Error:', error.message);
        }
    }
    return result;
}

const users = showUsers([7, -12, 44, 22]);
console.log(users);