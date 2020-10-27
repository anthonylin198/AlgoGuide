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

      
[1,2,1]
[1,1,0]
[1,0,1]

check top, left, bottom, right  -- starting point at [i, j]

top: [i-1, j]
left: [i, j - 1]
bottom: [i+1,j]
right: [i, j+1]


recursive function, checking if the top, left, bottom, and right at the same value or "color"

exit conditions: if i is > arr.length; or is < 0     and if j is > arr[0].length or is < 0



O(n) time and O(n) space from the recursive call stack

*/

function floodFill(image, sr, sc, newColor) {
  // keep track of thte original color
  const originalColor = image[sr][sc];
  if (newColor === originalColor) return image;
  // create recursive helper function
  function floodHelper(image, i, j, newColor) {
    // exit condition - if any hit
    if (
      i > image.length - 1 ||
      j > image[0].length - 1 ||
      i < 0 ||
      j < 0 ||
      image[i][j] !== originalColor
    ) {
      return;
    }
    // fill in the newColor
    image[i][j] = newColor;
    // recursive calls, to top, left, bottom, and right
    floodHelper(image, i - 1, j, newColor);
    floodHelper(image, i + 1, j, newColor);
    floodHelper(image, i, j - 1, newColor);
    floodHelper(image, i, j + 1, newColor);
  }

  // call floodHelper
  floodHelper(image, sr, sc, newColor);

  // return the image
  return image;
}
