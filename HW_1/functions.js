//Practical task 2
console.log('Lesyk');


//Practical task 3
let first = 'My text';
let second = 1234;
alert(`${first} ${second}`);
second = first;
alert(`${first} ${second}`);


//Practical task 4
const MyObject = {
    string: 'My string',
    number: 123,
    boolean: false,
    undefined: undefined,
    null: null
};
            

//Practical task 5
let isAdult = confirm('Are you 18 years old or older?');
console.log(isAdult);


//Practical task 6
const MyData = {
    firstName: "Olena",
    lastName: "Lesyk",
    studyGroup: "FastTrack Retraining",
    yearBirth: 1985
};

let isMarried;
MyData.isMarried = true;
for (let variable in MyData) {
    console.log(`${variable}: ${typeof MyData[variable]}`);
}

let number = [];
let boolean = [];
let string = [];

for (let variable in MyData) {
    let value = MyData[variable];
    if (typeof value === 'number') number.push(value)
        else if (typeof value === 'boolean') boolean.push(value)
        else if (typeof value === 'string') string.push(value)
};
console.log('Number: ', number);
console.log('Boolean: ', boolean);
console.log('String: ', string);

let myNull = null;
let myUndefined;
console.log(typeof myNull, typeof myUndefined);


//Practical task 7
let login = prompt("What is your Username?", "Enter your name here");
let email = prompt("What is your email?", "Enter your email here");
let password = prompt("What is your password?", "Enter your password here");
alert(`Dear ${login}, your email is ${email}, your password is ${password}.`);


//Practical task 8*
let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30;
alert(`The number of seconds in one hour: ${secondsInHour}. The number of seconds in one day: ${secondsInDay}. The number of seconds in one Month: ${secondsInMonth}`);