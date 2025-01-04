'use strict'
//Function Topics
//Default Parameters
//Passing Arguments by Value and by Reference


//Default parameters
//Es5 way of writing default parameters in function, is by re-assigning the parameters with a default primitive values.
const bookings = [];
//ES15 way of assigning default parameters is to assign the default values right inside the parameter bracket
const createBooking = function (flightNumber = 'please specify', numberOfPassenger = 0, price = 199){
    //ES5 way of assigning default parameters
    // flightNumber = flightNumber || 'empty';
    // numberOfPassenger = numberOfPassenger || 0;
    // price = price || 0;
    const booking = {

        flightNumber,
        numberOfPassenger,
        price,
    }
    // console.log(booking); //uncomment this line to see result in the terminal or console.
    bookings.push(booking);
}

//test case
createBooking('Aero419', '165');
createBooking();


//Passing arguments Works: Value vs Reference
//code exercise
const flight = 'Arik459';
const chinweotitio = {
    name : 'Chinweotito Chukwu',
    passport : 45903924
};

const checkIn = function(flightNumber, passenger){
    flightNumber = 'Aero234';
    passenger.name = 'Mrs. ' + passenger.name;

    if(passenger.passport === 45903924){
        console.log('Checked in');
        console.log(passenger);
    }else{
        console.log('Wrong passport');
    }
}

//Test case
checkIn(flight, chinweotitio);
console.log(flight);
console.log(chinweotitio);














