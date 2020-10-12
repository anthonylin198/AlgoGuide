// todo: Implement a closure in JS: Closure are done to maintain data privacy in functional componenets -- even though this syntax -- personally haven't sued too much,

// when building with React with managing state in functional components closures are used under the hood to maintain function component data privsacy
function closureExample() {
  let num = 0;
  return function () {
    console.log(num);
    num++;
  }
}

// const closure1 = closureExample();
// closure1()
// closure1()
// closure1()

// const closure2 = closureExample()
// closure2()
// closure2()




// todo: give an example of hoisting: In JS, function declarations and variables are hoisted, making them available throughout the lexical environment. But this is very deifferent in various cases

hello()
function hello() {
  console.log(test)
  console.log("hello")
}


var test = 5;




// todo:  give an example of async in JS: Javascript is singlethreaded, but async operations give the ability to be able to return promises
function asyncExample() {
  console.log("we are here")
  setTimeout(() => {
    console.log("Now we have the data");
  }, 2000);

  console.log("we are still able to execute js code")
  console.log("async stuff is nonblocking")
}

asyncExample();
// todo: Implement a closure in JS: Closure are done to maintain data privacy in functional componenets -- even though this syntax -- personally haven't sued too much,

// when building with React with managing state in functional components closures are used under the hood to maintain function component data privsacy
function closureExample() {
  let num = 0;
  return function () {
    console.log(num);
    num++;
  }
}

// const closure1 = closureExample();
// closure1()
// closure1()
// closure1()

// const closure2 = closureExample()
// closure2()
// closure2()




// todo: give an example of hoisting: In JS, function declarations and variables are hoisted, making them available throughout the lexical environment. But this is very deifferent in various cases

hello()
function hello() {
  console.log(test)
  console.log("hello")
}


var test = 5;




// todo:  give an example of async in JS: Javascript is singlethreaded, but async operations give the ability to be able to return promises
function asyncExample() {
  console.log("we are here")
  setTimeout(() => {
    console.log("Now we have the data");
  }, 2000);

  console.log("we are still able to execute js code")
  console.log("async stuff is nonblocking")
}

asyncExample();
