// ! 3. Playin around - we get access to that total. We can allow others to access values inside function, without directly modifying the variables
const adder = () => {
  let total = 0;
  return function () {
    total++;
    console.log(total)
  }
}


// Use closures for data privacy simil
const check = adder(); // set check to eqaul to the function definition of adder
check();
// check()
// check()

const check2 = adder();
check2();
check2();







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