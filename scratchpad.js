const arr = [
  "ssd f,dsv",
  "ass SFGSDFSDFqw.eqwf",
  "rd,sadsa tger",
  "fd.sSDFSDFf app",
  "app l,o",
  "fd.s lod",
  "sdf,sd lit",
];

// reverse each string with only the letters

function reverse(arr) {
  for (let i = 0; i < arr.length; i++) {
    const cleaned = arr[i]
      .match(/[a-zA-Z]/g)
      .reverse()
      .join("")
      .toLowerCase();
    arr[i] = cleaned;
  }
  return arr;
}

console.log(reverse(arr));
