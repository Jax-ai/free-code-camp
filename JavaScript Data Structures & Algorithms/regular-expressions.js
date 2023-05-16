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


/*
~~~~~~~~~~~~~~~~~~~ Match Characters that Occur Zero or More Times ~~~~~~~~~~~~~~~~~~~~
*/
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result13 = chewieQuote.match(chewieRegex);



/*
~~~~~~~~~~~~~~~~~~~ Find Characters with Lazy Matching ~~~~~~~~~~~~~~~~~~~~
*/
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/; // Change this line
let result14 = text.match(myRegex);

/*
~~~~~~~~~~~~~~~~~~~ Find One or More Criminals in a Hunt ~~~~~~~~~~~~~~~~~~~~
*/
let reCriminals = /C+/; // Change this line

/*
~~~~~~~~~~~~~~~~~~~ Match Beginning String Patterns ~~~~~~~~~~~~~~~~~~~~
*/
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result15 = calRegex.test(rickyAndCal);

/*
~~~~~~~~~~~~~~~~~~~ Match Ending String Patterns ~~~~~~~~~~~~~~~~~~~~
*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result16 = lastRegex.test(caboose);


/*
~~~~~~~~~~~~~~~~~~~ Match All Letters and Numbers ~~~~~~~~~~~~~~~~~~~~
*/
let quoteSample6 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result17 = quoteSample.match(alphabetRegexV2).length;


/*
~~~~~~~~~~~~~~~~~~~ Match Everything But Letters and Numbers ~~~~~~~~~~~~~~~~~~~~
*/
let quoteSample7 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result18 = quoteSample.match(nonAlphabetRegex).length;

/*
~~~~~~~~~~~~~~~~~~~ Match All Numbers ~~~~~~~~~~~~~~~~~~~~
*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result19 = movieName.match(numRegex).length;

/*
~~~~~~~~~~~~~~~~~~~ Match All Non-Numbers ~~~~~~~~~~~~~~~~~~~~
*/
let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result20 = movieName.match(noNumRegex).length;


/*
~~~~~~~~~~~~~~~~~~~ Restrict Possible Usernames ~~~~~~~~~~~~~~~~~~~~
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result21 = userCheck.test(username);

/*
~~~~~~~~~~~~~~~~~~~ Match Whitespace ~~~~~~~~~~~~~~~~~~~~
*/
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result22 = sample.match(countWhiteSpace);

/*
~~~~~~~~~~~~~~~~~~~ Match Non-Whitespace Characters ~~~~~~~~~~~~~~~~~~~~
*/
let sample9 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result23 = sample.match(countNonWhiteSpace);


/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result24 = ohRegex.test(ohStr);


/*
~~~~~~~~~~~~~~~~~~~ Specify Only the Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result25 = haRegex.test(haStr);



/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/



/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/


/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/


/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/


/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/


/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/

/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/

/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/

/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/

/*
~~~~~~~~~~~~~~~~~~~ Specify Upper and Lower Number of Matches ~~~~~~~~~~~~~~~~~~~~
*/









