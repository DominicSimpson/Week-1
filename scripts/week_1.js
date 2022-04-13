// // Hello user 
// // Write a function which greets the user. The function should receive one argument, a string.
// We can assume the string is a person’s name.
// We’d like the function to return "Hello " and then the name. We should be able to see the output in the console.

// // Examples:

// // console.log(greeter("Yvonne"));
// // // outputs to the console: Hello Yvonne

// // let myGreeting = greeter("gregor");
// // console.log(myGreeting);
// // // outputs: Hello gregor



function nameGreeting (name) {
    return "Hello " + name;
}

console.log(nameGreeting("Dominic Simpson"));


// What type? 
// Write a function which returns the type of the argument we pass in.

// console.log(checkType(12));
// // ouputs: number

// let typeOf = "this is a string";
// console.log(checkType(typeOf));
// // outputs: string
// Bonus: Examine the output we get when we check the type of an array. Why does this happen?

function checkArgumentType (type) {
    return typeof type;
}

console.log(checkArgumentType("Dominic"));

// // // // Bonus question: The typeof operator checks to see what the data type being passed in as an argument is. 
// JavaScript is a high-level programming language, and as such, is able 
// // // // to detect different data types. This is in contrast to low-level programming languages, 
// // // where there is no abstraction. The advantage of JavaScript is this sense is that it is flexible
// // with data types.
// JavaScript is able to detect a the data type as either a string (a sequence of characters inside quotes), 
// a number, a boolean (confirming that a value is either true or false), or a function (such as the one above).



// Check length 
// Write a function which returns the length of the string we pass in.

// const theLength = checkLength("Around the World");
// console.log(theLength);
// // outputs: 16

// console.log(checkLength("One More Time"));
// // outputs: 13


function checkLength (stringInput) {
    return stringInput.length;
}

console.log(checkLength("Dominic"));


// Bonus: Can we use the length property on other types of variable? What else might this be useful for?

// // // The length property is only applicable to strings and arrays (for the latter, see below). 
// // // If the length property is called on an Object, number, or Boolean argument, the output is listed as undefined.
// // // In addition to being able to calculate the length of a string, the length property can be used to count how many values 
// // // there are in an array (a collection of values). This is especially important if an arry contains a large number 
// // of values - as can often be the case. The array below contains only four values, and the length property counts this. 
// But it could contain hundreds of values - in which case the length property becomes useful in stating exactly how many:

function checkLength (arrayInput) {
    return arrayInput.length;
}

console.log(checkLength([25,15,83,49]));