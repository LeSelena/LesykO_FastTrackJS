// Task 1: Add the code using destructuring so that lines written in comments appear in the browser console
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // ["Bob"]


// Task 2: Add the code using destructuring so that lines written in comments appear in the browser console
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  
  let {
    names: [, name2, , name4],
    ages: [, age2, , age4],
  } = data;
  
  console.log(name2); // "Tom"
  console.log(age2);  // 24
  console.log(name4); // "Bob"
  console.log(age4);  // 26

  // Task 3: Write a function mul() that accepts any number of parameters of different types and returns the product of parameters of type Number
  function mul(...args) {
    let numbers = args.filter(item => typeof item === 'number');
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, num) => acc * num, 1);
  }
  
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0  
  

  // Task 4: Modify the exisiting code using arrow functions so that the code does not use bind () methods
  let server = {
    data: 0,
    convertToString(callback) {
      callback(() => this.data + "");
    }
  };
  
  let client = {
    server: server,
    result: "",
    calc(data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification() {
      return (callback) => {
        this.result = callback();
      };
    }
  };
  
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"


  // Task 5: Write the function mapBuilder (keysArray, valuesArrays), which accepts two arrays of the same length
  // Using these arrays, the function must create a Map object whose keys are values from the first array , and Map values are values from the second array 
  // After that, the function returns this Map object
  function mapBuilder(keysArray, valuesArray) {
    let map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
      map.set(keysArray[i], valuesArray[i]);
    }
    return map;
  }
  
  // How to use:
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", " i "];
  let map = mapBuilder(keys, values);
  
  console.log(map.size);    // 4
  console.log(map.get(2));  // "span"
  
  