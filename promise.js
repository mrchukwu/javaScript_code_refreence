//
// const gitHubAPI = "https://api.gtihub.com/users/mrchukwu";
// const user = fetch(gitHubAPI);
// console.log(user);

const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); //orderId
createOrder(cart) //orderId
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
    .then(function(orderId){
        return procceedToPayment(orderId)
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(error){
        console.log(error.message);
    })

//producer
//promise can only be Resolved or Rejected
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            console.log("data fetching...")
            setTimeout(function(){
                resolve(orderId)
            }, 5000);
        }
    })
    return pr;
}

function procceedToPayment(orderId){
    //proceed to payment
    //this will return a promise
    return new Promise(function(resolve, reject){
        resolve("Payment successful");
    })
}

function validateCart(cart){
    return true;
}
