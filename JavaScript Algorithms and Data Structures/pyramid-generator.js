/*
~~~~~~~~~~~~~~~~~~~~ Build a Pyramid Generator ~~~~~~~~~~~~~~~~~~~~
*/

console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

/*
~~~~~~~~~~~~~~~~~~~~ Variables ~~~~~~~~~~~~~~~~~~~~
- JavaScript has 7 primitive data types
- Strings are immutable, which means once they are created, they cannot be changed. The variable can still be reassigned another value.
- In JavaScript, the convention to use is camel case.
- The default value of an uninitialized variable is undefined
- const variable cannot be reassigned like a let variable
*/

let character;
let character2 = "Hello";

/*
~~~~~~~~~~~~~~~~~~~~ Console ~~~~~~~~~~~~~~~~~~~~
console allows you to print and view JavaScript output. 
*/

console.log(character);

/*
~~~~~~~~~~~~~~~~~~~~ Arrays ~~~~~~~~~~~~~~~~~~~~
- An array is a non-primitive data type 
- Non-primitive data types differ from primitive data types in that they can hold more complex data. 
- Primitive data types like strings and numbers can only hold one value at a time.
- Arrays are special in that they are considered mutable. This means you can change the value at an index directly.
*/
let rows = [];
console.log(rows[0]);

// Getting the last element in an array
array[array.length - 1];


/*
~~~~~~~~~~~~~~~~~~~~ Methods ~~~~~~~~~~~~~~~~~~~~
- .push() method allows you to "push" a value to the end of an array.
- .pop() removes the last element from an array and returns that element.
*/
array.push(12);
let popped = rows.pop()


/*
~~~~~~~~~~~~~~~~~~~~ for Loops ~~~~~~~~~~~~~~~~~~~~

*/
for (iterator; condition; iteration) {
  logic;
}

/*
~~~~~~~~~~~~~~~~~~~~ for...of Loops ~~~~~~~~~~~~~~~~~~~~

*/
for (const value of iterable) {

}


/*
~~~~~~~~~~~~~~~~~~~~ functions ~~~~~~~~~~~~~~~~~~~~
A function is a block of code that can be reused throughout your application
- All functions in JavaScript return a value
- By default, functions return undefined as their value.
- When you pass a value to a function call, that value is referred to as an argument.
*/
function test() {

}
test();