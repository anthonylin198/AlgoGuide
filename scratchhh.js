// number of memberships
function membership(arr) {
  for (let i = 1; i < arr.length; i++) {
    // check if the number starts off good
    let counter = 0;
    let totalCounter = 0;
    if (arr[i][0] === "4" || arr[i][0] === "5") {
      counter++;
      totalCounter++;
    } else if (arr[i][0] === 3) {
      if (arr[i][1] === "7") {
        counter++;
        totalCounter++;
      } else {
        console.log("no");
        continue;
      }
    } else {
      console.log("no");
      continue;
    }
    let currentNum = counter;
    for (let j = currentNum; j < arr[i].length; j++) {
      // exit is if total counter is 15
      if (totalCounter === 14) {
        console.log("yes");
      } else if (counter === 5) {
        if (arr[i][j] === ":" || arr[i][j] === "-" || arr[i][j] === "/") {
          counter = 0;
          continue;
        } else {
          console.log("no");
          break;
        }
      } else if (arr[i][j].charCodeAt() >= 48 && arr[i][j].charCodeAt() <= 57) {
        counter++;
        totalCounter++;
        continue;
      } else {
        console.log("no");
        break;
      }
    }
  }
}

membership([2, "47182-22222-32562", "512sa:gg727:99213", "sad"]);

// edit comments
