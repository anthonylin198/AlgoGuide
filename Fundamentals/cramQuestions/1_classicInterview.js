// https://www.fullstack.cafe/blog/javascript-code-interview-questions

// todo: What is a callback and give a simple example: A function passed into another function as an argument

function callOperation(arr, callback) { // higherorder function
  const outputArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    outputArr.push(callback(arr[i], arr[i + 1]))
  }
  return outputArr;
}


function addTwo(a, b) { // callback function
  return a + b;
}

const arr = [1, 2, 3, 4, 5, 6]

// console.log(callOperation(arr, addTwo))


// todo: given a string, reverse each word in a sentence
function reverseSentence(string) {
  const reversed = string.split(" ");
  // reverse each string in the array
  for (let i = 0; i < reversed.length; i++) {
    reversed[i] = reverseString(reversed[i])
  }

  return reversed.join(" ")
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

// console.log(reverseSentence("Welcome to this Javascript Guide!"))

// todo: check if is an array
function checkIsArray(arr) {


  if (Array.isArray(arr)) return true;

  return false;
}

// console.log(checkIsArray(3))

// todo: check if a number is an integer: just divide by one and see if the remainder is 0
function checkIsInt(num) {

  if (num % 1 === 0) return true;

  return false;
}


// todo: array methods
const arr2 = [1, 2, 3, 4, 5]

// console.log(arr2.pop());
// console.log(arr2.shift()) // removes the element and shifts over
// console.log(arr2)

// arr.splice(position, number of elements)
// console.log(arr2.splice(1, 1))
// console.log(arr2)



// todo: 
function isPalindrome(str) {
  // reverse the str
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  console.log(reverseStr)
}

// console.log(isPalindrome("hello"))


// todo: fizzbuzz question: console logs numbers from 1 to n, n is the integer, logs fizz instead multiples of 3, logs buzz multiples of 5, fizzbuzz for both

// solution: create a loop that iterates from i = 1 to <= n, and create conditionals




// anagram if both use the same letters in the same quantity

// create a cache to store all characters in string, first make lowercase. Iterate through other string to check if the mathc
// solution 2: split strings into arrays, and sort the arrays -- sicne characters have codes it will sort by that
function isAnagram(string1, string2) {
  const cache = {}
  // check the lengths are equal
  if (string1.length !== string2.length) return false;

  for (let i = 0; i < string1.length; i++) {
    let lowerCase = string1[i].toLowerCase();
    if (!cache[lowerCase]) cache[lowerCase] = 1;
    else {
      cache[lowerCase]++;
    }
  }

  // iterate through string2
  for (let char of string2) {
    let lowerCase = char.toLowerCase();
    if (!cache[lowerCase]) return false;
  }

  return true;
}

// console.log(isAnagram('finder', 'Friend'))



// find the vowels in an array
function findVowels(string) {
  // create a cache to store all the vowels
  const cache = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  }
  let counter = 0;
  for (let char of string) {
    if (cache[char]) counter++;
  }
  return counter;
}

// console.log(findVowels('why'))




// fibonacci question
// 0, 1, 1, 2, 3, 5, 8
function findFibonacci(n) {
  // create an array to store fibonacci numbers
  const arr = [0, 1]
  // iterate from 2 to n
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n - 1]
}

console.log(findFibonacci(5))


