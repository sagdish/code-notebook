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
  name: "sam",
  age: 23,
};

const obj2 = {
  name: "sam",
  age: 23,
};

const strObj = JSON.stringify(obj1);

const parsedObj = JSON.parse(strObj);

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
// console.log(strObj);
// console.log(parsedObj);

// to get desired percentage:
// function percentage(percent, total) {
//   return ((percent/ 100) * total).toFixed(2)
// }


// function hashMap(queryType, query) {
//   let obj = {}
  
//   for (let i = 0; i < queryType.length; i++) {
//       const type = queryType[i];
//       if (type === "insert") {
//           obj[ query[i[0]] ] = query[i[1]];
//       } else if (type === "addToValue") {
//           for ()
//       }
//   }
  
  
  // for (const type of queryType) {
      
  // }
// }

// add to value
// Object.keys(spy).forEach(key => {
//   spy[key] = "redacted");
// });


// function renameKeys(obj, newKeys) {
//   const keyValues = Object.keys(obj).map(key => {
//     const newKey = newKeys[key] || key;
//     return { [newKey]: obj[key] };
//   });
//   return Object.assign({}, ...keyValues);
// }
// Usage:

// const obj = { a: "1", b: "2" };
// const newKeys = { a: "A", c: "C" };
// const renamedObj = renameKeys(obj, newKeys);
// console.log(renamedObj);
// // {A:"1", b:"2"}

const obj = { 1: 23, 2: 24, 3: 'string', 4: false}
console.log(obj)


const arr = Object.entries(obj).map( ([key, value]) => {
  const newKey = Number(key) + 1
  return {[newKey]: value} 
})
// console.log(arr)

const modObj = Object.assign({}, ...arr)

console.log(modObj);