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