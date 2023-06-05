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
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");