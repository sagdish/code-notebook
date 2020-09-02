// console.log(a);
// test();

// function test() {
//   console.log(a);
//   var a = 'goo goo';
// }

// const array = [1,2,3, 10, 7, 8];
 
// function getMaxNumber(arr){
//   return Math.max.apply(null, arr)
// }
 
// console.log(getMaxNumber(array)) // should return 3

// const myarr = [3, 5, 2, 6]

// const newarr = [...myarr]

// console.log(...myarr)

// const character = {
//   name: 'Simon',
//   getCharacter() {
//     return this.name;
//   }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);

// console.log(giveMeTheCharacterNOW)
 
// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't


// types:
// 1. num
// 2. true
// 3. undefined
// 4. strings
// 5. null  - typeof object!?
// 6. Symbol
// 7. {}

// typeof 


// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// var check1 = JSON.stringify(user1)
// var check2 = JSON.stringify(user2)
// var eq = check1 == check2
// alert(eq); // gives false



// const mylitplyBy = (num, fn) => {
//   return fn(num)
// }

// function mylitplyByTen(num) {
//   return num * 10
// }
// function mylitplyByTwo(num) {
//   return num * 2
// }

// console.log(mylitplyBy(3, mylitplyByTwo))




// function mylitplyBy(num) {
//   return function(num2) {
//     return num * num2
//   }
// }

// const obj = {
//   func() {
//     return 'hey!'
//   }
// }

// console.log(obj.func())

// const multiplyBy = num1 => num2 => num1 * num2;

// const mulitplyByFive = multiplyBy(5);

// console.log(mulitplyByFive(4));



// flatten the array;
// const arr = [1, 3, [4, 5, [6, 7, [12, 34, [23, 33]]]], 8, 9];
// // console.log(arr);
// function flatten(arr) {
//   // console.log(arr)
//   let result = [];
//   arr.forEach(el => {
//     if (Array.isArray(el)) {
//       result = result.concat(flatten(el));
//     } else {
//       result.push(el)
//     }

//     // Array.isArray(el) ? result.push(...flatten(el)) : result.push(el);
//   });
//   return result;
// }

// console.log(flatten(arr));


// bind practice:


// Function.prototype.myBind = function(ctx) {
//   const self = this;
//   return function() {
//     self.apply(ctx);
//   }
// }

// const foo = function() {
//   console.log(this.bar);
// }

// let baz = foo.myBind({bar: 'hello'});

// baz();


// compare two objects:
const obj1 = {
  name: 'sam',
  age: 23
}

const obj2 = {
  name: 'sam',
  age: 23
}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
console.log(obj2)