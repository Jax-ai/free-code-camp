/*
~~~~~~~~~~~~~~~~~~~~ Convert Celsius to Fahrenheit ~~~~~~~~~~~~~~~~~~~~
*/

function convertCtoF(celsius) {
    let fahrenheit = celsius*(9/5) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);

/*
~~~~~~~~~~~~~~~~~~~~ Reverse a String ~~~~~~~~~~~~~~~~~~~~
*/

function reverseString(str) {
    let newStr = [];
     for (let i = 0; i < str.length; i++) { 
         newStr[i] = str[str.length - (i+1)] ;      
     }
     str = newStr.join("");
     return str;
 }
 
 reverseString("hello");

 // Best solution:
function reverseString(str) {
  return str.split("").reverse().join("");
}

/*
~~~~~~~~~~~~~~~~~~~~ Factorialize a Number ~~~~~~~~~~~~~~~~~~~~
*/

function factorialize(num) {

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }  
    return result;
  }
  factorialize(5);

  // Recursive solution

  function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);


/*
~~~~~~~~~~~~~~~~~~~~ Find the Longest Word in a String ~~~~~~~~~~~~~~~~~~~~
*/
function findLongestWordLength(str) {
    
    let words = str.split(" "); 
    let longest = 0
   
    for(let i = 0; i <= words.length -1; i++ ) {

        if(words[i].length > longest) {
            longest = words[i].length ;
        }
    }

    return longest;
   }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


/*
~~~~~~~~~~~~~~~~~~~~ Return Largest Numbers in Arrays ~~~~~~~~~~~~~~~~~~~~
*/

function largestOfFour(arr) {

    let OutputArray = [];
    for(let i = 0; i < arr.length; i++) {

        let largest = arr[i][0];
        for(let j = 0; j < arr[i].length; j++) {

            if(arr[i][j] > largest) {

                largest = arr[i][j];
            }
        }

        OutputArray.push(largest);
    }

    return OutputArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
~~~~~~~~~~~~~~~~~~~~ Confirm the Ending ~~~~~~~~~~~~~~~~~~~~
*/
function confirmEnding(str, target) {
    return target === str.substring(str.length - target.length);
  }
  
  confirmEnding("Bastian", "n");

  //Optimal solution
  function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");


/*
~~~~~~~~~~~~~~~~~~~~ Repeat a String Repeat a String ~~~~~~~~~~~~~~~~~~~~
*/

function repeatStringNumTimes(str, num) { 

    let result = "";

    for (let i = 0; i < num; i++) {
        result = result + str;        
    }

    return result;
}

  
  repeatStringNumTimes("abc", 3);
  




/*
~~~~~~~~~~~~~~~~~~~~ Truncate a String ~~~~~~~~~~~~~~~~~~~~
*/

function truncateString(str, num) {

  if (num >= str.length ) {

    return str;
  } 

  return str.slice(0,num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

 /*
~~~~~~~~~~~~~~~~~~~~ Finders Keepers ~~~~~~~~~~~~~~~~~~~~
*/
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

 /*
~~~~~~~~~~~~~~~~~~~~ Boo who ~~~~~~~~~~~~~~~~~~~~
*/

function booWho(bool) {  
  return ((typeof bool) === "boolean");
}

booWho(null);


 /*
~~~~~~~~~~~~~~~~~~~~ Title Case a Sentence ~~~~~~~~~~~~~~~~~~~~
*/

function titleCase(str) {

  let newTitle = str.split(" ");
  let updatedTitle = [];

  for (let i in newTitle) {

    updatedTitle[i] = newTitle[i][0].toUpperCase() + newTitle[i].slice(1).toLowerCase();

  }

  return updatedTitle.join(" ");

}

titleCase("I'm a little tea pot");

/*
~~~~~~~~~~~~~~~~~~~~ Slice and Splice ~~~~~~~~~~~~~~~~~~~~
*/
function frankenSplice(arr1, arr2, n) {

  return [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)];

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*
~~~~~~~~~~~~~~~~~~~~ Falsy Bouncer ~~~~~~~~~~~~~~~~~~~~
*/

function bouncer(arr) {

  let result = [];

  for (let i in arr) {

    if(arr[i]) result.push(arr[i]);

  }
  return result;
}

bouncer([7, "ate", "", false, 9]);


/*
~~~~~~~~~~~~~~~~~~~~ Where do I Belong ~~~~~~~~~~~~~~~~~~~~
*/
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);