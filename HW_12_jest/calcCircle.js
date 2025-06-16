// calcCircle.js for the Task 3: Create a calcCircle.js file 
// that contains 2 functions for calculating the circle length getCircleLength(radius) and circle area getCircleArea(radius). 
// Export functions.

function getCircleLength(radius) {
  return 2 * Math.PI * radius;
}

function getCircleArea(radius) {
  return Math.PI * radius ** 2;
}

module.exports = {
  getCircleLength,
  getCircleArea,
};
