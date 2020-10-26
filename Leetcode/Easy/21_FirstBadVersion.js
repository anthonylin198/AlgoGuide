/*

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad.
 Implement a function to find the first bad version. You should minimize the number of calls to the API.


Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.


Input: n = 1, bad = 1
Output: 1


*/

/*

todo: First problem
[1, 2, 3, 4, 5]       bad = 4

[4] is the first bad version because it is the first true


todo: Brute force solution. Iterate htrough the array from the start, and make the call to isBadVersion at every iteration through -- very large number this is inefficiend

isbadversion(1) isbadversion(2) etc....


todo: Better solution -- start from the last and the first, if the last is not true, then we can return there is none. Divide and conquer. if middle is true, then we take left side

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

1) Check 1 & 10. If 10 is not true, we know none are. If 1 is true, then we return 1
2) if 1 is not true, then we keep checking the index in the middle
3) if the middle index is true, divide left. If it is false, divide right


*/

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // binary search
    var start = 1,
      end = n;
    while (start < end) {
      var mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid; // look on left side of mid
      } else {
        start = mid + 1; // look on the right side of mid
      }
    }
    return start;
  };
};
