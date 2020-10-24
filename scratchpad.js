const arr = [
  "ssd fdsv",
  "ass qweqwf",
  "rdsadsa tger",
  "fdsf app",
  "app lo",
  "fds lod",
  "sdfsd lit",
];

// if you want to avoid the first word
arr.sort((a, b) => {
  return a > b ? 1 : -1;
});

console.log(arr);
