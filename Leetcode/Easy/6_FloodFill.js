/*
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.


image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]

From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.


*/

/*

[1,1,1]
[1,1,0]
[1,0,1]

[2,2,2]
[2,2,0]
[2,0,1]


Solution: First figure out what makes a color touching at any given point

Starting: [1][1]
Touching: [0][1] [1][0] [1][2] [2][1]  // same row left and right, then one column above and one column below

recursive function that will check all surrounding, keep going until nothing surrounding is filled, then we just return.

Create a helper function that will determine of surrounding are filled


*/

// function floodFill(image, sr, sc, newColor) {
//   // figure out what the original color is
//   let originalColor = image[sr][sc];
//   // create a helper function that takes in the image, sr, sc, and newColor
//   function floodFillHelper(image, i, j, newColor) {
//     if (image[i - 1] && image[i - 1][j] === originalColor) {
//       image[i - 1][j] = newColor;
//       floodFillHelper(image, i - 1, j, newColor);
//     }
//     if (image[i][j + 1] === originalColor) {
//       image[i][j + 1] = newColor;
//       floodFillHelper(image, i, j + 1, newColor);
//     }
//     if (image[i][j - 1] === originalColor) {
//       image[i][j - 1] = newColor;
//       floodFillHelper(image, i, j - 1, newColor);
//     }
//     if (image[i + 1] && image[i + 1][j] === originalColor) {
//       image[i + 1][j] = newColor;
//       floodFillHelper(image, i + 1, j, newColor);
//     }
//     return image;
//   }

//   return floodFillHelper(image, sr, sc, newColor);
// }

var floodFill = function (image, sr, sc, newColor) {
  const currentColor = image[sr][sc];

  traverse(image, currentColor, newColor, sr, sc);

  return image;
};

const traverse = (image, currentColor, newColor, x, y) => {
  if (newColor === currentColor) return;

  if (
    x < 0 ||
    y < 0 ||
    x > image.length - 1 ||
    y > image[0].length ||
    image[x][y] !== currentColor
  )
    return;

  image[x][y] = newColor;

  traverse(image, currentColor, newColor, x + 1, y);
  traverse(image, currentColor, newColor, x - 1, y);
  traverse(image, currentColor, newColor, x, y + 1);
  traverse(image, currentColor, newColor, x, y - 1);
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  )
);
