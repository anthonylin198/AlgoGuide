// ! 1. Object data privacy. Lexical scope means that a variable defined oustside a function can be accessible inside another function defined after the variable declaration
const getSecret = (secret) => {
  return {
    get: () => secret
  };
};



// We need to access the closure
const tester = getSecret("yoooo").get;

// console.log(tester())




// ! 2. Partial functions: Applying the inner function to only SOME of the arguments
const partialApply = (fn, ...fixedArgs) => {
  return function (...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};


const add = (a, b) => a + b;

const add10 = partialApply(add, 10);

// console.log(add10(5))
// console.log(add10(5))
// console.log(add10(5))


// ! 3. Playin around - we get access to that total. We can allow others to access values inside function, without directly modifying the variables
const adder = () => {
  let total = 0;
  return function () {
    total++;
    console.log(total)
  }
}

const check = adder();
// check()
// check()
// check()



// ! 4. OOP vs functional, not directly modifying the variables

// OOP
class MyClass {

  constructor(fname, lname) {
    this.first_name = fname
    this.last_name = lname
  }

  getFullName() {
    return [this.first_name, this.last_name].join(" ")
  }

  setFirstName(fn) {
    this.first_name = fn
  }
  setLastName(ln) {
    this.last_name = ln
  }

}

// const anthony2 = new MyClass("Anthony", "Linn")
// console.log(anthony2.getFullName())



// Functional
function MyObject(fn, ln) {
  let fname = fn,
    lname = ln

  const getFullName = () => {
    return [fname, lname].join(" ")
  }

  const setFirstName = first => {
    fname = first
  }
  const setLastName = last => {
    lname = last
  }

  return {
    getFullName,
    setFirstName,
    setLastName
  }
}

// const anthony = MyObject("Anthony", "Lin")
// console.log(anthony.getFullName())