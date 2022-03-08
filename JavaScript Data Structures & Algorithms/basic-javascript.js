/*
~~~~~~~~~~~~~~~~~~~ Comments ~~~~~~~~~~~~~~~~~~~~
*/
//This is the first style

/* 
and this is the second style
*/

/*
~~~~~~~~~~~~~~~~~~~ Variables ~~~~~~~~~~~~~~~~~~~~

    8 Different data types:
     - undefined
     - null
     - boolean
     - string
     - symbol
     - bigint
     - number
     - object
*/
//Asnwer:
var myName;

myName = 7;

b = a;

var a = 9;

var myFirstName = "Jacques";
var myLastName = "Pienaar";

var a = 5;
var b = 10;
var c = "I am a";

//Camel Case
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Let
let catName = "Oliver";
let catSound = "Meow!";

//Const - Use uppercase for any constants
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//Math
const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 8 / 4;

//Increment
myVar++;
myVar--;

//Decimals
let myDecimal = 5.7;
const testproduct = 5.0 * 1.0;
const testquotient = 4.4 / 2.0; // Change this line

//Remainder
const remainder = 11 % 3;

//
//Compound assignment
// Only change code below this line
a += 12;
b += 9;
c += 7;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// Only change code below this line
a /= 12;
b /= 4;
c /=11;



/*
~~~~~~~~~~~~~~~~~~~ Escape Characters ~~~~~~~~~~~~~~~~~~~~
*/
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';


/*
~~~~~~~~~~~~~~~~~~~ Escape Sequences ~~~~~~~~~~~~~~~~~~~~


    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \r	carriage return
    \t	tab
    \b	word boundary
    \f	form feed

*/

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
const myStr4 = "This is the start. " + "This is the end."; // Change this line

let myStr5;
myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";

// Only change code below this line
const myName = "Jacques";
const myStr6 = "My name is " + myName + "and I am well!";


// Change code below this line
const someAdjective = "Awesome";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;


/*
~~~~~~~~~~~~~~~~~~~ .length ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
let lastNameLength = 0;
const lastName3 = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

/*
~~~~~~~~~~~~~~~~~~~ First Letter  ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
let firstLetterOfLastName = "";
const lastName4 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName2[0]; // Change this line

/*
~~~~~~~~~~~~~~~~~~~ String Immutability  ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
let myStr8 = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

/*
~~~~~~~~~~~~~~~~~~~ Use Bracket Notation to Find the Nth Character in a String  ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const lastName5 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

/*
~~~~~~~~~~~~~~~~~~~ Use Bracket Notation to Find the Last Character in a String  ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const lastName6 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line


/*
~~~~~~~~~~~~~~~~~~~ Use Bracket Notation to Find the Nth-to-Last Character in a String  ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const lastName7 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line

/*
~~~~~~~~~~~~~~~~~~~ Word Blanks  ~~~~~~~~~~~~~~~~~~~~
*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myNoun + " is " + myAdjective + " he had to " + myVerb + " out the door " + myAdverb; // Change this line
// Only change code above this line


/*
~~~~~~~~~~~~~~~~~~~ Arrays ~~~~~~~~~~~~~~~~~~~~
*/
// Only change code below this line
const myArray = [];
myArray[0] = "How cool";
myArray[1] = 128;


//Nested Array
const myArray = [["Jacques", 21],["Annina", 15]];

//Access data in array via index
const myArray = [50, 60, 70];
const myData = myArray[0];


//Changing arrays
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;


//Access Data from multi dimensional arrays
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray[2][1];

/*
~~~~~~~~~~~~~~~~~~~ PUSH onto Array ~~~~~~~~~~~~~~~~~~~~
*/
  // Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog",3]);  


/*
~~~~~~~~~~~~~~~~~~~ POP from Array ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray2 = myArray.pop();

/*
~~~~~~~~~~~~~~~~~~~ SHIFT from Array ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();




/*
~~~~~~~~~~~~~~~~~~~ UNSHIFT from Array ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);



/*
~~~~~~~~~~~~~~~~~~~ Shopping List ~~~~~~~~~~~~~~~~~~~~
*/
const myList = [];
myList.push(["Milk", 1]);
myList.push(["Chocolate Bar", 7]);
myList.push(["Bread Rolls", 12]);
myList.push(["Red Bull", 2]);
myList.push(["Ice Cream", 1]);



/*
~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~
*/
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();


/*
~~~~~~~~~~~~~~~~~~~ Function Arguments ~~~~~~~~~~~~~~~~~~~~
*/

function functionWithArgs(parm1, parm2) {

  console.log(parm1 + parm2);
}

functionWithArgs(15, 12);

/*
~~~~~~~~~~~~~~~~~~~ Function Return ~~~~~~~~~~~~~~~~~~~~
*/
function timesFive(parm1) {

  return (parm1 * 5);
}



/*
~~~~~~~~~~~~~~~~~~~ Function Scopes ~~~~~~~~~~~~~~~~~~~~
*/

// Declare the myGlobal variable below this line

let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



/*
~~~~~~~~~~~~~~~~~~~ Local Function Scopes ~~~~~~~~~~~~~~~~~~~~
*/
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


/*
~~~~~~~~~~~~~~~~~~~ Global vs. Local Scope in Functions ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

/*
~~~~~~~~~~~~~~~~~~~ Understanding Undefined Value returned from a Function ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
let sum1 = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}


// Only change code above this line

addThree();
addFive();


/*
~~~~~~~~~~~~~~~~~~~ Assignment with a Returned Value ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


/*
~~~~~~~~~~~~~~~~~~~ Stand in Line ~~~~~~~~~~~~~~~~~~~~
*/
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  item = arr[0];
  arr.shift();
  
  return item;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*
~~~~~~~~~~~~~~~~~~~ Booleans ~~~~~~~~~~~~~~~~~~~~
*/
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}


/*
~~~~~~~~~~~~~~~~~~~ IF Statement ~~~~~~~~~~~~~~~~~~~~
*/
function trueOrFalse(wasThatTrue) {
  // Only change code below this line

  if(wasThatTrue) {
    return "Yes, that was true";
  } else{
    return "No, that was false";
  }


  // Only change code above this line

}


/*
~~~~~~~~~~~~~~~~~~~ Comparison with the Equality Operator ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


/*
~~~~~~~~~~~~~~~~~~~ Strict Comparison with the Equality Operator ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);



/*
~~~~~~~~~~~~~~~~~~~ Comparison with the Inequality Operator ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);



/*
~~~~~~~~~~~~~~~~~~~ Strict Comparison with the Inequality Operator ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);



/*
~~~~~~~~~~~~~~~~~~~ Comparison with the Greater Than Operator ~~~~~~~~~~~~~~~~~~~~
*/
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);




/*
~~~~~~~~~~~~~~~~~~~ Comparison with the Greater Than Or Equal To Operator ~~~~~~~~~~~~~~~~~~~~
*/
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);



/*
~~~~~~~~~~~~~~~~~~~ Comparison with the Less Than Operator ~~~~~~~~~~~~~~~~~~~~
*/
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


/*
~~~~~~~~~~~~~~~~~~~ Comparison with the Less Than Or Equal To Operator  ~~~~~~~~~~~~~~~~~~~~
*/
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);



/*
~~~~~~~~~~~~~~~~~~~ Comparisons with the Logical And Operator  ~~~~~~~~~~~~~~~~~~~~
*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {   
      return "Yes";   
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);


//No 2
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);




/*
~~~~~~~~~~~~~~~~~~~ ELSE Statement  ~~~~~~~~~~~~~~~~~~~~
*/
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else  {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//Else If
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else{
  return "Between 5 and 10";
  }
}

testElseIf(7);



/*
~~~~~~~~~~~~~~~~~~~ ELSE IF Statement  ~~~~~~~~~~~~~~~~~~~~
*/
function orderMyLogic(val) {

  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
/*
~~~~~~~~~~~~~~~~~~~ Chaining If Else Statements  ~~~~~~~~~~~~~~~~~~~~
*/

function testSize(num) {
  // Only change code below this line
  if(num >= 20) {
      return "Huge";
  } else if(num < 5) {
    return "Tiny";
  } else if(num < 10){
      return "Small";
  } else if(num < 15) {
      return  "Medium";
  } else if(num < 20) {
      return "Large";
  } 
  // Only change code above this line
}

testSize(14);



/*
~~~~~~~~~~~~~~~~~~~ Golf Code  ~~~~~~~~~~~~~~~~~~~~
*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  if(strokes == 1) {
      return "Hole-in-one!";
  } else if(strokes - par == -2 || strokes - par < -2){

      return "Eagle";
  } else if(strokes - par == -1) {
      return "Birdie";
  } else if(strokes - par == 0) {
      return "Par";
  } else if(strokes - par == 1) {
      return "Bogey";
  } else if(strokes - par == 2) {
      return "Double Bogey";
  } else if(strokes - par == 3 || strokes - par > 3) {
      return "Go Home!";
  }

  // Only change code above this line
}

golfScore(5, 4);



/*
~~~~~~~~~~~~~~~~~~~ Selecting from Many Options with Switch Statements ~~~~~~~~~~~~~~~~~~~~
*/

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1: 
      answer = "alpha";
      break;
    
    case 2: 
      answer = "beta";
      break;

    case 3: 
      answer = "gamma";
      break;
    
    case 4: 
      answer = "delta";
      break;
    
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);


/*
~~~~~~~~~~~~~~~~~~~ Adding a Default Option in Switch Statements ~~~~~~~~~~~~~~~~~~~~
*/

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      answer = "apple";
      break;
    
    case "b":
      answer = "bird";
      break;
    
    case "c":
      answer = "cat";
      break;
    
    default:
      answer = "stuff";
      break;

  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);


/*
~~~~~~~~~~~~~~~~~~~ Multiple Identical Options in Switch Statements ~~~~~~~~~~~~~~~~~~~~
*/
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;

    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);


/*
~~~~~~~~~~~~~~~~~~~ Replacing If Else Chains with Switch~~~~~~~~~~~~~~~~~~~~
*/
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch(val) {
    case "bob":
      answer = "Marley";
      break;

    case 42:
      answer = "The Answer";
      break;
    
    case 1:
      answer = "There is no #1";
      break;
    
    case 99:
      answer = "Missed me by this much!";
      break;
    
    case 7:
      answer = "Ate Nine";
      break;
    
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);



/*
~~~~~~~~~~~~~~~~~~~ Returning Boolean Values from Functions ~~~~~~~~~~~~~~~~~~~~
*/

function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);


/*
~~~~~~~~~~~~~~~~~~~ Return Early Pattern for Functions ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
function abTest(a, b) {
  // Only change code below this line
  if(a < 0 || b < 0) {
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);



/*
~~~~~~~~~~~~~~~~~~~ Counting Cards ~~~~~~~~~~~~~~~~~~~~
*/
let count = 0;
let output;
function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;      
  }

  if(count <= 0) {    
    return count + " Hold";    
  } else if(count > 0) {
    return count + " Bet";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/*
~~~~~~~~~~~~~~~~~~~ Objects ~~~~~~~~~~~~~~~~~~~~
*/
const myDog = {
  // Only change code below this line
  name: "Fluffy",
  legs: 4,
  tails: 1,
  friends: ["john", "mat"]


  // Only change code above this line
};


/*
~~~~~~~~~~~~~~~~~~~ Accessing Object Properties with Dot Notation ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line


/*
~~~~~~~~~~~~~~~~~~~ Accessing Object Properties with Bracket Notation ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj2['an entree'];   // Change this line
const drinkValue = testObj2['the drink'];    // Change this line


/*
~~~~~~~~~~~~~~~~~~~ Accessing Object Properties with Variables~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line




/*
~~~~~~~~~~~~~~~~~~~ Updating Object Properties ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myDog4 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"] = "Happy Coder";


/*
~~~~~~~~~~~~~~~~~~~ Add New Properties to a JavaScript Object ~~~~~~~~~~~~~~~~~~~~
*/
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

/*
~~~~~~~~~~~~~~~~~~~ Delete Properties from a JavaScript Object ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

/*
~~~~~~~~~~~~~~~~~~~ Using Objects for Lookups ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",

  }

  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");


/*
~~~~~~~~~~~~~~~~~~~ Testing Objects for Properties ~~~~~~~~~~~~~~~~~~~~
*/
function checkObj(obj, checkProp) {
  // Only change code below this line

  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }

  // Only change code above this line
}


/*
~~~~~~~~~~~~~~~~~~~ Manipulating Complex Objects ~~~~~~~~~~~~~~~~~~~~
*/
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Kanye West",
    "title": "Donda 2",
    "release_year": 2022,
    "formats": [
      "Download",
      "Physical",
      "LP"
    ],
  }
];



/*
~~~~~~~~~~~~~~~~~~~ Accessing Nested Objects ~~~~~~~~~~~~~~~~~~~~
*/
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];


/*
~~~~~~~~~~~~~~~~~~~ Accessing Nested Arrays ~~~~~~~~~~~~~~~~~~~~
*/
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];


/*
~~~~~~~~~~~~~~~~~~~ Tracks ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if(value == '') {    
     delete records[id][prop];
  
  } else if(prop == 'tracks') {   


    if(records[id].hasOwnProperty('tracks')) {      
      records[id].tracks.push(value);   

    } else {
      records[id].tracks = [];
      records[id].tracks.push(value);       
    }
  //console.log(records[id].hasOwnProperty(tracks));


  } else {
    
    records[id][prop] = value;
  }

  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');



/*
~~~~~~~~~~~~~~~~~~~ Iterate with JavaScript While Loops ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArray = [];

let i = 5;
while (i >= 0) {

  myArray.push(i);
  i--;
}
console.log(myArray);
// Only change code below this line


/*
~~~~~~~~~~~~~~~~~~~ Iterate with JavaScript For Loops ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArray = [];

for (let i = 1;i <= 5; i++) {

  myArray.push(i);

}

// Only change code below this line

/*
~~~~~~~~~~~~~~~~~~~ Iterate Odd Numbers With a For Loop ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArray = [];

for (let i = 1; i <= 9; i += 2){

  myArray.push(i);

}

// Only change code below this line

/*
~~~~~~~~~~~~~~~~~~~ Count Backwards With a For Loop ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArray = [];

for (let i = 9; i >= 1; i -= 2) {

  myArray.push(i);
}

// Only change code below this line


/*
~~~~~~~~~~~~~~~~~~~ Iterate Through an Array with a For Loop ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {

  total += myArr[i];
}

// Only change code below this line



/*
~~~~~~~~~~~~~~~~~~~ Nesting For Loops ~~~~~~~~~~~~~~~~~~~~
*/
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  for(let i = 0; i < arr.length; i++) {

    for(let j = 0; j < arr[i].length; j++) {
       product *= arr[i][j];
      }
  }

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



/*
~~~~~~~~~~~~~~~~~~~ Iterate with JavaScript Do...While Loops ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const myArray = [];
let ii = 10;

// Only change code below this line

do {  
  myArray.push(i);
  i++;
}while (i < 5) 


/*
~~~~~~~~~~~~~~~~~~~ Replace Loops using Recursion ~~~~~~~~~~~~~~~~~~~~
*/
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0){
    return 0;
  } else {
    return arr[n-1] + sum(arr, n-1);
  }

  // Only change code above this line
}



/*
~~~~~~~~~~~~~~~~~~~ Profile Lookup ~~~~~~~~~~~~~~~~~~~~
*/
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  console.log("\n");
  for (let i = 0; i < contacts.length; i++) {

    if(contacts[i].firstName == name) {

      if(contacts[i].hasOwnProperty([prop])) {

        return contacts[i][prop];
        console.log("property found");
      } else {

        return "No such property";
      }
      
    }
  } 
  
  return "No such contact"; 
  
  

  // Only change code above this line
}

lookUpProfile("Akira", "likes");