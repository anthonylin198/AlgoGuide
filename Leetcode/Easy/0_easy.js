// todo: String - Be comfortable with replace and match from regex as well as String.charCodeAt, String.fromCharCode, and substr

/*

String.charCodeAt
 
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase

    LOWERCASE TO UPPERCASE, WE NEED TO ADD 32



REGEX METHODS
      replace(/[^a-z0-9]/g, "") -- this will only keep letters and numbers
      matches(/[a-z][0-9]/g)     -- turns into array of characters and matches



SLICE AND SUBSTRING essentially do the same. Can just add together

  arr.slice(0, i) + arr.slice(i+1) this would get rid of the middle character each time

*/

// todo: Sorting
/*
SORT METHOD: return -1 for in order an 1 for not in order


MANUAL: Be able to use 2 pointers and manually sort as you need. Learn some of 
the other sorting algorithms later as well

*/

// todo: Binary Search - Divide and Conquer
/*

Remember to not double check values. KEEP TRACK OF start and the end, and you want to
continusly check the middle. Check first bad version to get a sense of this


*/

// todo: Carry Over : Adding strings or binary
/*
Remember the carry needs to be part of the conditional in cases like 9 + 1 = 10

*/

// todo: Simple Recursion
/*

1) Map out the plan of whether you need a helper function, or if can just add to a variable
    -- Typically if doing a for loop, you can make recursive calls until you hit the end of the for loop
2) Making a variable += to recursive call

*/

// todo: Creating classes - Taking the average sum
/*
1) Remember to not name things in the constructor the same as the names of the methods
that you are going to create

*/

// todo: LinkedList - Be able to iterate through linkedlist, keep track of pointers -- reverse and merge linkedlists
/*

NOT SURE ABOUT SOME OF THESE, MAKE SURE TO EDIT AND PLAY AROUND
1) Remember to store next in temp, before they get manipulated
2) keep track of the pointers
3) If you set p1=p2, p1 will no longer point to l1. However, p1.next=p2 would still pointer to p1
4) when you change node = node.next, we are not actually changing the value of node. We are just changing the spot of the pointer
5) REMEMBER if you want to change current node you are on, must directly change the node.val and node.next, cannot do node = node.next
6) Reverse lnikedlist works, you can save a value temp, then manipulate that exact value
    - If you need to manipulate node.next , save const temp = node.next


*/

// todo: Binary Trees - Be able to iterate through DFS and BFS. Understand saving variables and recursion then returning.
