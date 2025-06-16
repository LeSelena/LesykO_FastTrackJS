// Task 1:  Test the addition of the number 0.1 to the number 0.2 with a result of 0.3
describe('Task 1: 0.1 + 0.2 ≈ 0.3 ?', () => {
  test('0.3 is correct', () => {
    const result = 0.1 + 0.2;
    // Jest’s built‑in matcher for approximate equality
    expect(result).toBeCloseTo(0.3, 15); // 15 decimal places is plenty
  });
});



// Task 2:  Test the given userList array
const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe('Task 2: verification if the Array', () => {
  // 1) Does the array contain "admin"?
  test('contains "admin"', () => {
    expect(userList).toContain('admin');
  });

  // 2) Is the first element "Nick"?
  test('first element is "Nick"', () => {
    expect(userList[0]).toBe('Nick');
  });

  // 3) Is the last element "new_user_2"?
  test('last element is "new_user_2"', () => {
    expect(userList[userList.length - 1]).toBe('new_user_2');
  });

  // 4) Is the length exactly 5?
  test('has length 5', () => {
    expect(userList).toHaveLength(5);
  });

  // 5) Is the 3rd element (index 2) of type string?
  test('third element is a string', () => {
    expect(typeof userList[2]).toBe('string');
  });

  // 6) Prove there is no 8th element (index 7)
  test('has no 8th element', () => {
    expect(userList[7]).toBeUndefined();
  });
});



// Task 3: Create a calcCircle.js file that contains 2 functions for calculating the circle length. Export functions
const { getCircleLength, getCircleArea } = require('./calcCircle');

describe('Task 3: Circle calculations', () => {
  test('getCircleLength(22) returns approximately 138.2', () => {
    const result = getCircleLength(22);
    expect(result).toBeCloseTo(138.2, 1); // rounded to 1 decimal place
  });

  test('getCircleArea(9) returns approximately 254.47', () => {
    const result = getCircleArea(9);
    expect(result).toBeCloseTo(254.47, 2); // rounded to 2 decimal places
  });

  test('getCircleLength() with no argument returns NaN', () => {
    expect(getCircleLength()).toBeNaN();
  });

  test('getCircleArea() with no argument returns NaN', () => {
    expect(getCircleArea()).toBeNaN();
  });
});


// Task 4: Create a food.js file that contains the filterFoodPrice(food, min, max) function,
// which filters the array of products by price 
// food.test.js
const { filterFoodPrice } = require('./food');

const food = [
  { kind: 'potato', price: 10 },
  { kind: 'bred',   price: 16 },
  { kind: 'pepper', price: 27 },
  { kind: 'banana', price: 32 },
  { kind: 'lemon',  price: 50 },
];

describe('Task 4: filterFoodPrice() function results', () => {
  const min = 12;
  const max = 40;
  const filtered = filterFoodPrice(food, min, max);

  // 1) length should be 3
  test('returns an array of length 3', () => {
    expect(filtered).toHaveLength(3);
  });

  // 2) array contains the pepper object
  test('contains { kind: "pepper", price: 27 }', () => {
    expect(filtered).toContainEqual({ kind: 'pepper', price: 27 });
  });

  // 3) array contains 2nd, 3rd, 4th elements of the original array
  test('matches food.slice(1, 4)', () => {
    expect(filtered).toEqual(food.slice(1, 4));
  });

  // 4) price of first element > min
  test('first element’s price is greater than min', () => {
    expect(filtered[0].price).toBeGreaterThan(min);
  });

  // 5) price of third element < max
  test('third element’s price is less than max', () => {
    expect(filtered[2].price).toBeLessThan(max);
  });

  // 6) array does NOT contain lemon
  test('does not contain { kind: "lemon", price: 50 }', () => {
    expect(filtered).not.toContainEqual({ kind: 'lemon', price: 50 });
  });

  // 7a) every returned item is within range
  test('all returned prices lie between min and max', () => {
    expect(filtered.every(f => f.price >= min && f.price <= max)).toBe(true);
  });

  // 7b) original array is unchanged (immutability)
  test('does not mutate the original array', () => {
    const snapshot = [...food];
    filterFoodPrice(food, min, max);
    expect(food).toEqual(snapshot);
  });

  // 7c) calling with a range that yields no matches returns empty array
  test('returns empty array when no items match', () => {
    expect(filterFoodPrice(food, 60, 100)).toEqual([]);
  });
});


