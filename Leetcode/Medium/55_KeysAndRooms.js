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

// DFS approach - see if we can visit every room from starting point
function canVisitAllRooms(rooms) {
  const visitedRoom = {};
  function dfs(index) {
    if (visitedRoom[index]) return;
    visitedRoom[index] = true;
    rooms[index].forEach((key) => {
      dfs(key);
    });
  }
  dfs(0);
  return Object.keys(visitedRoom).length === rooms.length;
}

const rooms = [[1], [2], [3], []];
console.log(canVisitAllRooms(rooms));

// BFS technique
var canVisitAllRooms3 = function (rooms) {
  const stack = [0];
  const visitedRoom = { 0: true };
  while (stack.length) {
    const currRoom = stack.pop();
    rooms[currRoom].forEach((key) => {
      if (!visitedRoom[key]) stack.push(key);
      visitedRoom[key] = true;
    });
  }
  return Object.keys(visitedRoom).length === rooms.length;
};

const rooms2 = [[1], [2], [3], []];
console.log(canVisitAllRooms3(rooms2));
