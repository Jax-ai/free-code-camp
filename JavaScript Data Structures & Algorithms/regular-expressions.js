/*
~~~~~~~~~~~~~~~~~~~ Using the Test Method ~~~~~~~~~~~~~~~~~~~~
*/ 
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


/*
~~~~~~~~~~~~~~~~~~~ Match Literal Strings ~~~~~~~~~~~~~~~~~~~~
*/
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);


/*
~~~~~~~~~~~~~~~~~~~ Match a Literal String with Different Possibilities ~~~~~~~~~~~~~~~~~~~~
*/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);


/*
~~~~~~~~~~~~~~~~~~~ Ignore Case While Matching ~~~~~~~~~~~~~~~~~~~~
*/
let myString2 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result4 = fccRegex.test(myString);


/*
~~~~~~~~~~~~~~~~~~~ Extract Matches ~~~~~~~~~~~~~~~~~~~~
*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line


/*
~~~~~~~~~~~~~~~~~~~ Find More Than the First Match ~~~~~~~~~~~~~~~~~~~~
*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line


/*
~~~~~~~~~~~~~~~~~~~ Match Anything with Wildcard Period ~~~~~~~~~~~~~~~~~~~~
*/
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result7 = unRegex.test(exampleStr);


/*
~~~~~~~~~~~~~~~~~~~ Match Single Character with Multiple Possibilities ~~~~~~~~~~~~~~~~~~~~
*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line

/*
~~~~~~~~~~~~~~~~~~~ Match Letters of the Alphabet ~~~~~~~~~~~~~~~~~~~~
*/
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result9 = quoteSample2.match(alphabetRegex); // Change this line

/*
~~~~~~~~~~~~~~~~~~~ Match Numbers and Letters of the Alphabet ~~~~~~~~~~~~~~~~~~~~
*/
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi; // Change this line
let result10 = quoteSample3.match(myRegex2); // Change this line

/*
~~~~~~~~~~~~~~~~~~~ Match Numbers and Letters of the Alphabet ~~~~~~~~~~~~~~~~~~~~
*/
let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^0-9aeiou]/gi; // Change this line
let result11 = quoteSample4.match(myRegex3); // Change this line

/*
~~~~~~~~~~~~~~~~~~~ Match Characters that Occur One or More Times ~~~~~~~~~~~~~~~~~~~~
*/
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/ig; // Change this line
let result12 = difficultSpelling.match(myRegex4);