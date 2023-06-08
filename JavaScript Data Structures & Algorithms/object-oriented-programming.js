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

/*
~~~~~~~~~~~~~~~~~~~~ Extend Constructors to Receive Arguments ~~~~~~~~~~~~~~~~~~~~
*/

function Dog(name , color) { 

    this.name = name,
    this.color = color,
    this.numLegs = 4

}

let terrier = new Dog("Pitbull terrier", "brown");


/*
~~~~~~~~~~~~~~~~~~~~ Verify an Object's Constructor with instanceof ~~~~~~~~~~~~~~~~~~~~

Comapre an an object to a constructor, returning true or false 
    whether or not that object was created with the constructor

*/

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House;


/*
~~~~~~~~~~~~~~~~~~~~ Understand Own Properties ~~~~~~~~~~~~~~~~~~~~
*/

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

// Only change code below this line

for(let property in canary) {

    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }

}

/*
~~~~~~~~~~~~~~~~~~~~ Use Prototype Properties to Reduce Duplicate Code ~~~~~~~~~~~~~~~~~~~~

    Properties in the prototype are shared among ALL instances

*/
function Dog(name) {
    this.name = name;
  }
  
Dog.prototype.numLegs = 4;
  
  
// Only change code above this line
let beagle = new Dog("Snoopy");

/*
~~~~~~~~~~~~~~~~~~~~ Iterate Over All Properties ~~~~~~~~~~~~~~~~~~~~
*/
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle2 = new Dog("Snoopy");

let ownProps2 = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle2) {

    if(beagle.hasOwnProperty(property)) {
        ownProps2.push(property);
    } else {
        prototypeProps.push(property);
    }

}


/*
~~~~~~~~~~~~~~~~~~~~ Understand the Constructor Property ~~~~~~~~~~~~~~~~~~~~
*/
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {

    if(candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
  
  }

/*
~~~~~~~~~~~~~~~~~~~~ Change the Prototype to a New Object ~~~~~~~~~~~~~~~~~~~~
*/
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() { return "nom nom nom";},
    describe: function() { return "This dog is wicked!";}
  
  };



/*
~~~~~~~~~~~~~~~~~~~~ Remember to Set the Constructor Property when Changing the Prototype ~~~~~~~~~~~~~~~~~~~~

  Manually setting the prototype to a new object, erases the constructor property

*/
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };


/*
~~~~~~~~~~~~~~~~~~~~ Understand Where an Object’s Prototype Comes From ~~~~~~~~~~~~~~~~~~~~
*/
function Dog(name) {
    this.name = name;
}

let beagle4 = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle4);


/*
~~~~~~~~~~~~~~~~~~~~ Understand the Prototype Chain ~~~~~~~~~~~~~~~~~~~~
*/
function Dog(name) {
  this.name = name;
}

let beagle5 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


/*
~~~~~~~~~~~~~~~~~~~~ Use Inheritance So You Don't Repeat Yourself ~~~~~~~~~~~~~~~~~~~~
*/

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat  
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear  
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }

};