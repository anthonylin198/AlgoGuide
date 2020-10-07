// given an array, all students must receive at least one reward. any given student must receive strictly more rewards than adjacent students.


// [8, 4, 2, 1, 3, 6, 7, 9, 5]

// todo: Iterate through array until you find a something that breaks the pattern (increasing or decreasing) - all scores are unique
// create a map of the same array length
function minRewards(scores) {
  // create a variable to store the min rewards
  const rewards = scores.map(el => 1);

  return rewards;
}

console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]))