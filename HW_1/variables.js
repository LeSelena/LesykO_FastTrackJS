let MyData = {
    firstName: "Olena",
    lastName: "Lesyk",
    studyGroup: "FastTrack Retraining",
    yearBirth: 1985,
    isMarried: false
};

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
    