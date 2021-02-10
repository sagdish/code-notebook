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


// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.
function areSimilar(a, b) {
  const a_arr = a.filter((el, i) => el !== b[i]);
  const b_arr = b.filter((el, i) => el !== a[i]);
  return a_arr.reverse().length <= 2 && JSON.stringify(a_arr) === JSON.stringify(b_arr)
}

  

// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// Example
// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3
function arrayChange(inputArray) {
  let moves = 0
  
  for (let i = 1; i < inputArray.length; i++) {
      
      if (inputArray[i] <= inputArray[i - 1]) {
          const diff = (inputArray[i - 1] - inputArray[i]) + 1
          moves += diff;
          inputArray[i] += diff;
          loop = true; 
      }
  }
  
  return moves
}




// Given a rectangular matrix of characters, add a border of asterisks(*) to it:
function addBorder(picture) {
  const res = [];
  const length = picture[0] ? picture[0].length : 0;
  
  res.push('*'.repeat(length + 2))
  picture.forEach(el => (res.push(`*${el}*`)))
  res.push('*'.repeat(length + 2))
  
  return res;
}

// Given a string, find out if its characters can be rearranged to form a palindrome.

// solved, but code is ugly and super unreadable:
function palindromeRearranging(inputString) {
  // create object
  // count number of characters
      // if inputstring is even - even number of strings
      // if inputstring is odd - also even Except one character
      // except if string has only one character - applies to both cases
  // if neither of this cases, return false
  
  const obj = {};
  const length = inputString.length;
  const isOdd = length % 2 !== 0;
  let notEvenCount = 0;
  
  for (let i = 0; i < length; i++) {
      const current = inputString[i];
      if (obj[current]) {
          obj[current] += 1;
      } else {
          obj[current] = 1;
      }
      if (obj[current] === length) return true;
  }
  
  let oneKey = {
      key: null,
      falsy: null
  }
  
  Object.entries(obj).forEach( ([key, val]) => {     
     if (val % 2 !== 0) {
         if (oneKey.key === null || oneKey.key === key) {
              notEvenCount++;
              oneKey.key = key;
         } else {
             oneKey.falsy = true;
         }
     }
  })
  
  if (oneKey.falsy) return false
  
  
  return isOdd ? (notEvenCount % 2 === 1 ? true : false) 
      : (notEvenCount >= 1 ? false : true)
}


/*
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
*/

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrong = Math.max(yourLeft, yourRight)
  const yourWeak = Math.min(yourLeft, yourRight)
  
  const friendStrong = Math.max(friendsLeft, friendsRight)
  const friendWeak = Math.min(friendsLeft, friendsRight)
  
  return yourStrong === friendStrong && yourWeak === friendWeak
}


// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements:
function arrayMaximalAdjacentDifference(inputArray) {
  let max = 0;
  
  for (let i = 0; i < inputArray.length -1; i++) {
      const curr = inputArray[i]
      const adj = inputArray[i + 1]
      max = Math.max(max, Math.abs(curr - adj))
  }
  
  return max;   
}

/* 
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.
*/
function isIPv4Address(inputString) {
  // convert to array
  // loop array
      // assign el to vars until dot
      // 4 vars total
      // starts with number
      // in the range 0-255
  // if one the requirements are not met, return false
  // otherwise return true
  
  const arr = inputString.split('.')
  if (arr.length !== 4) return false;
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
      const el = arr[i]
      if (el) {
          console.log(el)
          if ((Number(el) > 255 || !Number(el)) && el !== '0') {
              return false
          }
          if (el[0] === '0' && el.length > 1) return false;
      } else {
          return false;
      }
  }
  
  
  return true;
}



function indexEqualsValueSearch(arr) {
  let start = 0
  let end = arr.length -1
  
  while (start <= end) {
    const i = Math.round((start + end) /2)
    if (arr[i] - i < 0) {
      start = i + 1
    } else if (arr[i] - i === 0 && (i === 0 || arr[i-1] - (i-1) < 0)) {
      return i
    } else {
      end = i-1
    }
  }
  
  return -1
}