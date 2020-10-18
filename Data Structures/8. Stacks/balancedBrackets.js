// write a function that takes a string made up of brackets - return boolean whether the string is balanced or not
// corresponding closing bracket must come after, and brckets can not overlap

/*

 [()]{[()]} TRUE

 [{]}()  FALSE -- no overlapping






[()]{[()]} TRUE --- LIFO

 implement a stack: []

 ["["]

 ["[", "("] // either close the open brace, or open another new brace adde to the stack

  ["["] // pop off the open paren

  [] // pop off the close parens



[{]}()  FALSE

["["]
["[", "{"]

returns false because the next element is a closing brace when it should be open

*/

function balancedBrackets(string) {
  // intialize the stack
  const stack = [];
  // create object that will represent open and close brace
  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  // create a loop iterating through string
  for (let char of string) {
    console.log("we here ", char);
    console.log("we heree", stack);
    // check if is open brace, then we push to the stack
    if (char in brackets) {
      stack.push(char);
    } else if (char === brackets[stack[stack.length - 1]]) {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(balancedBrackets("(a)"));
