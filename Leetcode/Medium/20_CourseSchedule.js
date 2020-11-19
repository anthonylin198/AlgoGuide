/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?


Input: numCourses = 2, prerequisites = [[1,0]]
Output: true


Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false

*/

/*

keep an object that will keep track of all the courses we did visit already


Input: numCourses = 4, prerequisites = [[0,1] [1,2],[3,1]]

Intuitive -- iterate through array of arrays. First create a cache of all courses that do not need a prereq. After that, we can keep iterating through checking the cache. If 

{0: true, 3: true}




course number           unlocks

0:                        []
1:                        [0]
2:                        []
3:                        [1]
4:                        []
5:                        []


Find if we will be able to hit 5 unique places
Create an array of arrays in this order

*/
