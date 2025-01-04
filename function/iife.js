//IIFE : Immediately Invoked Function Expression

//function expression
const normalFunctionExpression = function(){
    console.log("This is sent from function expression...");
}
//you invoke the function expression here
normalFunctionExpression();

//IIFE
//the IIFE is wrapped with a parentheses
(function(){
    console.log("This is sent from Immediately Invoked function expression...");
})()