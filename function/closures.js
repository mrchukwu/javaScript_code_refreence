//closures

const secureBooking = function(){
    let passengerCount = 0;
    return function() {
        passengerCount++;
        console.log("passengerCount", passengerCount);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// console.dir(booker)

let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

g() //thiss g function needs to be called before we can access the f function inside
console.dir(f);

//More of closure in action using the setTimeout function
const boardPassengers = function(n, wait){
    const perGroup = n /3;
    
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`)
}

const perGroup = 200; //if there is no perGroup variable created in the function, it will use the perGroup variable
// in the Global scope, but it exists in the function, it will the perGroup variable in the funcrtion creating a closure.
boardPassengers(900, 4);




