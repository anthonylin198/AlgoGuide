/*

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.


["a", "b", "c", "c"] --> ["a", "b", "c", 2]


combine the string: "abc2"


*/

/*

Solution: Iterate through the array, keep 2 pointers. If p2 does not exist, we know it is only one character and we can return that

["a", "b", "c", "c", "c", "c", "d"]
            p1                  p2

counter = 2   // if they are the same, we do while loop for p2
["a", "b", "c", 4]


*/

function compress(char) {
  let p1 = 0;
  let p2 = 1;
  if (!char[p1]) return "";
  if (!char[p2]) return char[p1].length;

  // iterate through char
  while (char[p1] && char[p2]) {
    // condition if p1 and p2 are different
    if (char[p1] !== char[p2]) {
      p1 = p2;
      p2 = p1 + 1;
    } else {
      // while they are equal, keep iterating p2
      while (char[p2] && char[p1] === char[p2]) {
        p2++;
      }
      let counter = p2 - p1; // deal with possibly 10 or more
      if (counter >= 10) {
        // turn counter into a string
        counter = counter.toString();
        char.splice(p1 + 1, counter - 1, counter[0]);
        for (let i = 1; i < counter.length; i++) {
          char.splice(p1 + 1 + i, 0, counter[i]);
          p1 = p1 + i + 2;
          p2 = p1 + 1;
        }
        // at every index push
      } else {
        char.splice(p1 + 1, counter - 1, counter.toString());
        p1 = p1 + 1;
        p2 = p1 + 1;
      }
    }
  }
  // return char.join("")
  return char;
}

console.log(
  compress([
    "a",
    "a",
    "b",
    "b",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
  ])
);

//! clean js solution
var compress = function (chars) {
  if (!chars.length) return 0;
  let j = 0;
  let cur = chars[0];
  let counter = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === cur) {
      counter++;
    } else {
      chars[j] = cur;
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) chars[++j] = s[k];
      }
      j++;
      cur = chars[i];
      counter = 1;
    }
  }
  return j;
};
