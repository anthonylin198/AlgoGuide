
// todo: functtion declarations are hoisted
helloWorld();

function helloWorld() {
  console.log("we out here");
}





// todo: Understand that this is not hoisted
const helloWorld2 = () => {
  console.log("we are here")
}

helloWorld2();



// todo: Understanding var hoisting: variables are initialized at undefined on runtime

console.log(a); // this will be undefined
var a = 3;
console.log(a);




//todo : checking var -- it gets hoisted, but is still undefined -- really aren't many use cases, so let is used more

function hello() {
  const arr = [1, 2, 3, 4, 5]
  console.log("test", test)
  for (let i = 0; i < arr.length; i++) {
    var test = 100;
    console.log(arr[i]);
  }
  console.log("we out here");
}


console.log(hello())
