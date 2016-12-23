// Functions are First-Class Data Types
// Functions ARE objects
// function multiply(x, y) {
//   return x * y;
// }
// multiply.version = "v.1.0.0";
// console.log(multiply.version);


// // Function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier / x;
//   };

//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(30);
// console.log(multiplyBy3);

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));



// Passing functions as arguments
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();









