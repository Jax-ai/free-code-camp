/*
~~~~~~~~~~~~~~~~~~~ Use an Array to Store a Collection of Data ~~~~~~~~~~~~~~~~~~~~
*/

let yourArray = [ 'string',  false,  1,  'more',  'more']; //Change this line

/*
~~~~~~~~~~~~~~~~~~~ Access an Array's Contents Using Bracket Notation ~~~~~~~~~~~~~~~~~~~~
*/
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "j";
// Only change code above this line
console.log(myArray);


/*
~~~~~~~~~~~~~~~~~~~ Add Items to an Array with push() and unshift() ~~~~~~~~~~~~~~~~~~~~
*/
function mixedNumbers(arr) {
    // Only change code below this line  
    arr.unshift('three');
    arr.unshift(2);
    arr.unshift("I");
  
    arr.push(7);
    arr.push("VIII");
    arr.push(9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));


/*
~~~~~~~~~~~~~~~~~~~ Remove Items from an Array with pop() and shift() ~~~~~~~~~~~~~~~~~~~~
*/
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


/*
~~~~~~~~~~~~~~~~~~~ Remove Items from an Array with pop() and shift() ~~~~~~~~~~~~~~~~~~~~
*/