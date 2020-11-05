/*
! Algo Expert

You're given a list of arbitrary jobs that need to be completed; these jobs are represented by distinct integers. Also given a list of dependencies.

A dependency is represented as a pair of jobs where the first job is a prerequisite of the second one. In other words, the second job depends on the first one; it can only be completed
once the first job is completed

Write a function that takes in a list of jobs and list of dependencies and returns a list containing valid order which given jobs can be completed

jobs = [1,2,3,4]
deps = [[1,2,], [1,3], [3,2], [4,2], [4,3]]

[1,4,3,2] or [4,1,3,2]


*/

/*

jobs = [1,2,3,4]
deps = [[1,2,], [1,3], [3,2], [4,2], [4,3]]


todo: Brute force solution
keep track of done jobs: [1, 4, 3, 4]
1) Iterate through jobs, "do" the jobs that do not need any prerequesites - if itere throuhg the second value in each deps, and see that not required, know we can just do hte job


2) Iterate throuhg again, for values that are not done, comparing the first value, with the done jobs array. If makes all the way through without returning false, then push


SOLVE WITH TOPOLOGICAL SORT


*/

// todo: Solution tracing through the jobs and deps - however, we need to kee pcycling through until we are golden
function topologicalSort(jobs, deps) {
  // create array to keep track of complete jobs
  const arr = [];
  // loop iterating through the job array

  // create helper function that will recursive call
  for (let i = 0; i < jobs.length; i++) {
    for (let j = 0; j < deps.length; j++) {
      if (deps[j][1] === jobs[i]) {
        // compare first value to see if it exists in the array
      }
    }
  }

  // if the array.length is not equal to jobs.length, we return []
  // else we return array
}

function check(arr) {}
