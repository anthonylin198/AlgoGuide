/*


Given array of integers, each represents a jump. Check if every element in the array is visited exactly once


0: 2
1: 3
2: 1
3: -4
4: -4
5: 2


Starting from node 0 each time. Keep a cache that will store visited. Each recursive call,
we need to check if it was visited, if it was already visited, we know we can return false

if it was not visited, we can continue

now we are back to 0 -> once we hit a repeat, we check of our object is same length as the array, if it is then we return true, else false
{0: true, 2: true, 3: true, 5: true, 1: true, 4: true }


[0, -4,2,3,4,5,6]
           p
index : 1

1 + -4 = -3

array.length + 

*/
function hasSingleCycle(array) {
  const visited = {};
  let hasSingleCycle = false;
  function dfs(index) {
    console.log(visited);
    if (visited[index]) {
      if (Object.keys(visited).length === array.length && index === 0) {
        hasSingleCycle = true;
        return;
      }
      return;
    }

    visited[index] = true;
    // conditional for recursive call
    const jump = array[index];
    let nextIdx = (index + jump) % array.length;
    nextIdx = nextIdx >= 0 ? nextIdx : nextIdx + array.length;
    dfs(nextIdx);
  }
  dfs(0);
  return hasSingleCycle;
}

console.log(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26]));

//1  2  7  3   6  8  5  4   9
