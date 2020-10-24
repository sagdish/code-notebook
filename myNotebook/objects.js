/* How to traverse object in JS 

*/

// returns array of tuples of key and value:
Object.entries('object goes here')

// array of of keys: 
Object.keys('object goes here')

// array of values:
Object.values('object goes here')

/*

convensional for loop, keep in mind 'for in' !traverses up the prototype chain!!!

for ('variable' in 'object') {
  // statement
}

*/


// examples:
const obj = { 1: 23, 2: 24, 3: 'string', 4: false}

const arr = Object.entries(obj).map( ([key, value]) => {
  return [key, value]
})

console.log(arr);