'use strict'
 //Function Topic
//First-Class function
//--JavaScript treats functions as first-class citizens
//--This means that functions are simply values
//--Functions are just another "type" of object

//Higher-Order function
//--A function that receives another function as an argument, that returns a new function, or both
//--This is only possible because of first-class functions

//Callback function

//code practice
const oneWord = function(str){
    return str.replace(/ /g, ' ').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...othersWords] = str.split(' ');
    return [first.toUpperCase(), ...othersWords].join(' ')
}

//Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

//test cases
transformer('JavaScript is the best!', upperFirstWord);



// Function Returning Function
const greeting = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

//Re-writing the function above using arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);

//text cases
const greetHello = greet("Hello");
greetHello("kennedy")
greetHello("Jane")

greet("Hello")("Eve")





















