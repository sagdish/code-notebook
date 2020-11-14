// Find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

// Goal to do with O(n) or O(nlogn) - Done with O(n)!!!

function findPairs(arr, num) {
  const result = []

  const obj = {};

  for (let i = arr.length -1; i >= 0; i--) {
    const curr = arr[i];
    const diff = num - curr;
    obj[curr] = [curr, diff]
    if (obj[diff]) {
      result.push(obj[diff])
    }
  }

  // for(let i = arr.length -1; i >= 1; i--) {
  //   const currentI = arr[i];

  //   for (let j = i - 1; j >= 0; j--) {
  //     const currentJ = arr[j];
  //     if (currentI + currentJ === num) {
  //       result.push([currentI, currentJ]);
  //     } 
  //   }
  // }

  return result;
}

console.log(findPairs([3, 5, 2, -4, 8, 11], 7))


// longest string challenge:
function allLongestStrings(inputArray) {
  let longest = 0;
  let obj = {};
  inputArray.forEach(el => {
      longest = Math.max(longest, el.length);
      if (obj[el.length]) {
          obj[el.length].push(el);
      } else {
          obj[el.length] = [el]
      }
  })
  return obj[longest]
}


// regular code challenge solution:
function alternatingSums(a) {
  const left = [], right = [];
  const sum = (a, b) => a + b;
  a.forEach((weight, i) => i % 2 === 0 ? left.push(weight) : right.push(weight))
  return [left.reduce(sum, 0), right.reduce(sum, 0)];
}

// solve this: A Sawtooth Sequence 

// solve this: 
// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.