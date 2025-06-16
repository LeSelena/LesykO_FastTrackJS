// File for the Task 4:
function filterFoodPrice(food, min, max) {
  return food.filter(el => el.price >= min && el.price <= max);
}

module.exports = {
  filterFoodPrice,
};
