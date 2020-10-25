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

// todo: Self created recursive own solution
function floodFill(image, sr, sc, newColor) {
  // figure out what the original color is
  let originalColor = image[sr][sc];
  image[sr][sc] = newColor;
  if (newColor === originalColor) return image;
  // create a helper function that takes in the image, sr, sc, and newColor
  function floodFillHelper(image, i, j, newColor) {
    if (image[i - 1] && image[i - 1][j] === originalColor) {
      image[i - 1][j] = newColor;
      floodFillHelper(image, i - 1, j, newColor);
    }
    if (image[i][j + 1] === originalColor) {
      image[i][j + 1] = newColor;
      floodFillHelper(image, i, j + 1, newColor);
    }
    if (image[i][j - 1] === originalColor) {
      image[i][j - 1] = newColor;
      floodFillHelper(image, i, j - 1, newColor);
    }
    if (image[i + 1] && image[i + 1][j] === originalColor) {
      image[i + 1][j] = newColor;
      floodFillHelper(image, i + 1, j, newColor);
    }
    return image;
  }
  image[sr][sc] = newColor;
  return floodFillHelper(image, sr, sc, newColor);
}

// todo: Faster solution capturing a lot of the other returns
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
    image[i][j] = newColor;
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
