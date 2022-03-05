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





