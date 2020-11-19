/*


There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room. -- find if we can visit every room

*/

/*

[
  [1],
  [2],
  [3],
  []
]

          0 - 1 - 2 - 3

[
[1,3],
[3,0,1],
[2],
[0]
]

                               0
                            /     \
                          1    -   3

                          2
  
visited: {}
stack: [0,1,3] 


since order doesn't matter, we could just pop instead of shifting

*/

/*

dfs solution: we know we start from index 0, so would keep track of the visited, and iterate through. If we reach a cycle repeat visited, before we have visited all, we know is false


visited: {0: true, 1: true, 2: true, 3: true}
-- if we hit the length, then we are good
[
  [1,2,3],
  [2],
  [3],
  [5]
]


*/

function roomVisits(arr) {
  const visited = {};
  function dfs(index) {
    if (visited[index]) {
      return;
    }
    visited[index] = true;
    for (let i = 0; i < arr[index].length; i++) {
      dfs(arr[index][i]);
    }
  }
  dfs(0);
  return Object.keys(visited).length === arr.length;
}

// bfs
function canVisitAllRooms(rooms) {
  const visited = {};
  const stack = [0];
  while (stack.length) {
    let currentIndex = stack.pop();
    visited[currentIndex] = true;
    for (let i = 0; i < rooms[currentIndex].length; i++) {
      // if we don't do this, we might push into an infinite cycle
      if (!visited[rooms[currentIndex][i]]) {
        stack.push(rooms[currentIndex][i]);
      }
    }
  }
  return Object.keys(visited).length === rooms.length;
}

console.log(roomVisits([[1], [2], [3], []]));
