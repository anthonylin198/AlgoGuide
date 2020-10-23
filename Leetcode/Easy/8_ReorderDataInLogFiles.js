/*

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.


Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]


identifier is used in case of ties


*/

/*

todo: iterate through the array, and check for words after. we only need to check one word after, and check if it is a number or a string
if there is a tie, then we base off of hte identifier

logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

iterate through the logs array and find what should be first, and push to the array. Digit logs should be put in the original order.
find all the digit logs in order and push to an array, then find all the character logs in order and push to an array

["let1 art can", "let2 own kit dig", "let3 art zero"]

In order to sort, we can split the string into and array of words, and compare every character

*/

function reorderLogFiles(logs) {
  const digitArr = [];
  const wordArr = [];

  // iterate through the logs array and first pass just throw into the correct arrays. Just look at the first number after
  for (let i = 0; i < logs.length; i++) {
    const check = logs[i].split(" ");
    if (check[1].charCodeAt(0) >= 96 && check[1].charCodeAt(0) <= 122) {
      wordArr.push(logs[i]);
    } else {
      digitArr.push(logs[i]);
    }
  }

  // now we need to sort the wordArr
  wordArr.sort((a, b) => {
    const first = a.split(" ");
    const second = b.split(" ");

    if (first[1] < second[1]) return -1;
    if (first[1] > second[1]) return -1;
    // if (first[1] < second[1]) return -1
    // if (first[1] < second[1]) return -1
  });

  // return wordArr concat with digitArr
  return wordArr.concat(digitArr);
}

console.log(
  reorderLogFiles([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ])
);
