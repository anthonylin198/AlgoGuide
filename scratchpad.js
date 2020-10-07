const getRefillContainers = (boxData) => {
  // declare array to store all boxes
  const boxes = [];
  // declare object to store the remaining brushes
  const brushes = {};
  // Use forEach to iterate through boxData, add in every group - potentially filter every above 2
  boxData.forEach((elem) => {
    // if it does not exist, declare key value pair
    if (!(elem.brush_color in brushes)) {
      brushes[elem.brush_color] = 1;
    } else {
      brushes[elem.brush_color]++;
      if (brushes[elem.brush_color] === 4) {
        const box = {};
        box[elem.brush_color] = 4;
        boxes.push(box);
        delete brushes[elem.brush_color];
      }
    }
  });

  // sort the array
  const sortable = [];
  for (let key in brushes) {
    sortable.push([key, brushes[key]]);
  }
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  // iterate through the remaining singles
  const remainingBrushes = Object.keys(brushes);
  let obj = {};
  let counter = 0;
  sortable.forEach((key) => {
    for (let i = 0; i < brushes[key[0]]; i++) {
      if (!(key[0] in obj)) {
        // check if it doesn't exist
        obj[key[0]] = 1;
        counter++;
        if (counter === 4) {
          boxes.push(obj);
          obj = {};
          counter = 0;
        }
      } else {
        obj[key[0]]++;
        counter++;
        // see if the box has 4 elements
        if (counter === 4) {
          boxes.push(obj);
          obj = {};
          counter = 0;
        }
      }
    }
  });

  if (Object.keys(obj).length) boxes.push(obj);
  return boxes;
};


const arr = [
  {
    brush_color: "blue",
  },
  {
    brush_color: "blue",
  },
  {
    brush_color: "blue",
  },
  {
    brush_color: "blue",
  },
  {
    brush_color: "blue",
  },
  {
    brush_color: "blue",
  },
  {
    brush_color: "blue",
  },
  {
    brush_color: "blue",
  },
  {
    brush_color: "green",
  },
  {
    brush_color: "green",
  },
  {
    brush_color: "green",
  },
  {
    brush_color: "pink",
  },
  {
    brush_color: "pink",
  },
];

console.log(getRefillContainers(arr))