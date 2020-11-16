
/*


a  a  b  c  c  b  b
  p1
            p2


4  -  1 = 3


3 returned

*/










const noRepeatSub
string = (s) => {
  if (!s.length || typeof s !== "string") return "Please use a valid string";
  if (s.length === 1) return 1;
  let maxLength = 0;
  let p1 = 0,
    p2 = 1;
  while (s[p1] && s[p2]) {
    if (s[p1] === s[p2]) {
      p1++;
      p2++;
    } else {
      const memo = { [s[p1]]: true, [s[p2]]: true };
      console.log(memo);
      p2 = p2 + 1;
      // while the character does not exist in memo
      while (!memo[s[p2]] && s[p2]) {
        console.log("Here", memo);
        memo[s[p2]] = true;
        console.log("There", memo);
        p2++;
      }
      console.log(p2);
      console.log(p1);
      console.log(maxLength);
      maxLength = Math.max(maxLength, p2 - p1);
      console.log(maxLength);
      p1++;
    }
  }
  return maxLength;
};
const string = "aabccbb";
console.log(noRepeatSubstring(string));
