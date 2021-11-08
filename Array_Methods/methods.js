const arr = [1, 2, 3, 4];

// MAP
const mappedArr = arr.map((value, index) => value * index + 5); // How to Use => Returns [5, 7, 11, 17]
Array.prototype.customMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${typeof callback} is not a function`);
  }
  let resultantArray = [];
  this.forEach((value, index) => {
    resultantArray[index] = callback(value, index, this);
  });
  return resultantArray;
};

// FILTER
const filteredArr = arr.filter((value, index) => value > 2); // How to Use => Returns [3, 4]
Array.prototype.customFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${typeof callback} is not a function`);
  }
  let resultantArray = [];
  this.forEach((value, index) => {
    if (callback(value, index, this)) resultantArray.push(value);
  });
  return resultantArray;
};

// REDUCE
/* HOW TO USE
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
*/

Array.prototype.customReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(`${typeof callback} is not a function`);
  }
  let result;
  this.forEach((value, index) => {
    if (initialValue) {
      result = callback(initialValue, value, index);
    } else {
      result = value;
    }

    initialValue = result;
  });
  return result;
};
