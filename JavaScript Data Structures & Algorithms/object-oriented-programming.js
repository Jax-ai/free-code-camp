/*
~~~~~~~~~~~~~~~~~~~~ Create a Basic JavaScript Object ~~~~~~~~~~~~~~~~~~~~
*/
let dog = {
    name: "Pote",
    numLegs: 4
  
  };

/*
~~~~~~~~~~~~~~~~~~~~ Use Dot Notation to Access the Properties of an Object ~~~~~~~~~~~~~~~~~~~~
*/

let dog2 = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog2.name + dog2.numLegs);


/*
~~~~~~~~~~~~~~~~~~~~ Create a Method on an Object ~~~~~~~~~~~~~~~~~~~~
*/

let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() { return "This dog has " + dog.numLegs + " legs.";}
  
  };
  
  dog3.sayLegs();

/*
~~~~~~~~~~~~~~~~~~~~ Make Code More Reusable with the this Keyword ~~~~~~~~~~~~~~~~~~~~
*/

let dog4 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog4.sayLegs();

/*
~~~~~~~~~~~~~~~~~~~~ Define a Constructor Function ~~~~~~~~~~~~~~~~~~~~
*/

function Dog() {

    this.name = "Pote",
    this.color = "Brown",
    this.numLegs = 4

}

/*
~~~~~~~~~~~~~~~~~~~~ Use a Constructor to Create Objects ~~~~~~~~~~~~~~~~~~~~
*/

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog();