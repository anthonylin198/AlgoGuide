// ! LEETCODE: Given an array candies and integer extraCandies, where candies[i] represents the number of candies that the ith kid has

// Can we distribute the extra candies to checkeck he or she can have the greatest number of candies among them -- multiple kids can have greatest number

// Input: candies = [2,3,5,1,3] ; extraCandies = 3
// Output: [true, true, true, false, true]

// todo: We first find the greatest value in the array, then we iterate through, if current iteration + extra candies is greater than greatest value, we return
function kidsWithcandies(candies, extraCandies) {
  // create an array that wil store greatest number possible, true/false array
  const possibleArr = [];
  let maxCandies = 0;
  // create a for loop that will identify the highest value in the array
  for (let i = 0; i < candies.length; i++) {
    maxCandies = Math.max(candies[i], maxCandies);
  }

  // create another for loop to iterate through array, adding extraCandies and comparing to the greatest number
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      possibleArr.push(true);
    } else {
      possibleArr.push(false);
    }
  }
  // then return the array that will store greatest number possible
  return possibleArr;
}

// todo: solution 2: Sort the array first, we can start from the very first element
