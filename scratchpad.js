/*


image = [[1,1,1], [1,1,0],[1,0,1]]

Output = [[2,2,2],[2,2,0], [2,0,1]]



[1,1,1]
[1,1,0]
[1,0,1]

filled with 2s from 1, 1
[2,2,2]
[2,2,0]
[2,0,1]




todo: solution - edge case could be if we were to try to fill with the same color. At any particular point, check around. If any points around match, then fill with the new color


[1,1,1]
[1,1,0]
[1,0,1]


[2,2,2]
[2,2,0]
[2,0,1]

if we were to start at [1,1]
chech at: [0,1][2,1]         [1,0]  [1,2]
variables: [i-1, j][i+2, j]   [i, j-1]  [i, j+1]


*/
function floodFill(image, sr, sc, newColor) {
  // we need a way to keep track of the old color
  const oldColor = image[sr][sc];
  if (oldColor === newColor) return image;

  function fill(image, i, j, newColor) {
    // create exit condition, if i is < 0 or j is < 0 or greater
    if (
      i < 0 ||
      j < 0 ||
      i > image.length - 1 ||
      j > image[0].length - 1 ||
      image[i][j] !== oldColor
    )
      return;
    if (image[i][j] === oldColor) image[i][j] = newColor;
    fill(image, i - 1, j, newColor);
    fill(image, i + 1, j, newColor);
    fill(image, i, j + 1, newColor);
    fill(image, i, j - 1, newColor);
  }

  // call the helper - pass in image, sr, sc, newColor
  fill(image, sr, sc, newColor);

  // return image
  return image;
}
