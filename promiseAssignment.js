//1. Promise can be created using a new Promise() constructor function.
// 2. This constructor function takes a callback function as argument.
// 3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
// 4. We can only resolve or reject a promise. Nothing else can be done.
// 5. An error can also be created using new Error('error message').
// 6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
// 7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
// 8. It can be useful in a way if we want to catch error for a particular portion of a chain.
// 9. We can have multiple catch based on requirement and then a general catch at the end.
// 10. Always remember to return a value in the promise chain for the next .then to use .
// 11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.
// //



const cart = ["shirts", "shoes", "belts", "sunglasses"];

const getOrder = createOrder(cart)
    .then(function(OrderId){
        console.log(OrderId);
        return OrderId;
    })
    .then(function(orderId){
        console.log("payment successful");
        return proceedToPayment(orderId);
    })
    .then(function(orderId){
        console.log("Order detail summary...");
        return showOrderSummmary(orderId);
    })
    .then(function(user){
        console.log("user wallet updated...");
        updateWallet(user);
    })
    .catch(function(err){
        console.log(err);
    });
// console.log(getOrder);

function user(waller){
    console.log("users wallet");
}

//creating order
function createOrder(cart){
    const promise = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("cart not valid");
            reject(err.message);
        }
        const order = "123456";
        resolve(order);
    })
    return promise;
}
//validate cart before proceeding to payment
function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    const promise = new Promise(function(resolve, reject){
        if(!orderId){
            const err = new Error("order ID is not valid");
        }
        resolve("Payment successful");
    })
    return promise;
}

function showOrderSummmary(orderId){
    const promise = new Promise(function(resolve, reject){
        if(!proceedToPayment(orderId)){
            const err = new Error("invalid order Id, cant show order Summary");
        }
        resolve("Details of the order....");
    })
    return promise;
}

function  updateWallet(user){
    const promise = new Promise(function(resolve, reject){
        if(!user){
            const err = new Error("user not valid");
        }
        resolve("User wallet updated successfully");
    })
    return promise;
}