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
~~~~~~~~~~~~~~~~~~~ Remove Items Using splice() ~~~~~~~~~~~~~~~~~~~~
*/
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);


/*
~~~~~~~~~~~~~~~~~~~ Add Items Using splice() ~~~~~~~~~~~~~~~~~~~~
*/
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


/*
~~~~~~~~~~~~~~~~~~~ Copy Array Items Using slice() ~~~~~~~~~~~~~~~~~~~~
*/
  function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2,4);
    return arr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

 
/*
~~~~~~~~~~~~~~~~~~~ Copy an Array with the Spread Operator ~~~~~~~~~~~~~~~~~~~~
*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));


/*
~~~~~~~~~~~~~~~~~~~ Combine Arrays with the Spread Operator ~~~~~~~~~~~~~~~~~~~~
*/
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());


/*
~~~~~~~~~~~~~~~~~~~ Check For The Presence of an Element With indexOf() ~~~~~~~~~~~~~~~~~~~~
*/

function quickCheck(arr, elem) {
  // Only change code below this line
  if(arr.indexOf(elem) > -1) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Optimal solution
function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

