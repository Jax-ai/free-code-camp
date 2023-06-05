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