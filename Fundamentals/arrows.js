let obj = {
  myVar: 'foo',

  myFunc: function () {
    console.log(this.myVar)
  }
}
obj.myFunc() // foo




// todo: understanding this keyword

let obj2 = {
  myVar: 'foo',

  myFunc: function () {
    console.log(this.myVar)

    setTimeout(function () {
      console.log(this.myVar)
    }, 1000)
  }
}
obj2.myFunc() // foo ... then... undefined


let obj3 = {
  myVar: 'foo',

  myFunc: function () {
    console.log(this.myVar)

    setTimeout(() => {
      console.log(this.myVar) // we get access to this - some lexical stuff
    }, 1000)
  }
}
obj3.myFunc() // foo ... then... foo