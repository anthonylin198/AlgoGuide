/*

Given an integer start and a list of edges.

start = 0
edge = [
  [[1,7]],
  [[2,6], [3,20], [4,3]],
  [[3,14]],
  [[4,2]],
  [],
  []
]

array with the distance to vertex 0, 1, 2, 3, 4, 5     -1 is returned when not possible to reach
[0, 7, 13, 27, 10, -1]

*/

function dijkstrasAlgorithm(start, edges) {
  const numberofVertices = edges.length;
  // setting mindistances all to infinity, except for the starting
  const minDistances = [];
  for (let i = 0; i < numberofVertices; i++) {
    minDistances.push(Infinity);
  }
  minDistances[start] = 0;
  // creating a set to check visited
  const visited = new Set();
  while (visited.size !== numberOfVertices) {
    // destructures out vertex and currentMinDistance
    const [vertex, currentMinDistance] = getVertexWithMinDistance(
      minDistances,
      visisted
    );
    // we reached the end
    if (currentMinDistance === Infinity) {
      break;
    }
    // else, we add the vertex to visited
    visited.add(vertex);
    // cycling throuhg the edges
    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;
      if (visited.has(destination)) {
        continue;
      }
      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }
  return minDistances.map((x) => (x === Infinity ? -1 : x));
}
// helper function to get the vertex with min distance
function getVertexWithMinDistance(distances, visited) {
  let currentMinDistance = Infinity;
  let vertex = -1;
  // create loop
  for (const [vertexIdx, distance] of distance.entries()) {
    if (visited.has(vertexIdx)) {
      constinue;
    }
    if (distance <= currentMinDistance) {
      vertex = vertexIdx;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
}
